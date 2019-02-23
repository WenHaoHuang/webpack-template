<!--
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-30 22:30:57
 * @Description: 菜单组件
 -->

<template>
  <article class="layout-aside">
    <!--
      scrollbar组件暴露了 native, wrapStyle, wrapClass, viewClass, viewStyle, noresize, tag 这7个 props属性
      props: {
        native: Boolean,  // 是否使用本地，设为true则不会启用element-ui自定义的滚动条
        wrapClass: {},  // 包裹层自定义样式类
        wrapStyle: {},  // 包裹层自定义样式
        viewClass: {},  // 可滚动部分自定义样式类
        viewStyle: {},  // 可滚动部分自定义样式
        noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
        tag: {  // 生成的标签类型，默认使用 `div`标签包裹
          type: String,
          default: 'div'
        }
      }
     -->
    <div class="layout-menu-nav">
      <el-scrollbar>
        <div
          class="menu-nav"
          v-for="(item,index) in menuList"
          :key="item.id"
          :class="{'active':index === activeIndex}"
          @click="menuFn(item,index)"
        >
          <i
            class="fa"
            :class="`fa-${item.meta.icon}`"
          />{{item.meta.title}}</div>
        <div
          class="item-slider"
          :style="{'top':activeIndex * 120 + 'px'}"
        />
      </el-scrollbar>
    </div>
    <div class="layout-menu-sub">
      <div class="title-sub">{{menuList[activeIndex].meta.title}}</div>
      <el-scrollbar>
        <template v-if="menuSubList.length > 0">
          <nav-menu
            v-for="item in menuSubList"
            :key="item.id"
            :item="item"
            class="menu-sub"
          />
        </template>
      </el-scrollbar>
    </div>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavMenu from './NavMenu.vue'

@Component({ components: { NavMenu } })
export default class MenuBar extends Vue {
  private activeIndex: number = 0
  private menuSubList: object = []
  private mounted() {
    const route = this.$route
    this.menuList.map((item: any, index: number) => {
      if (route.path.includes(item.path)) {
        this.activeIndex = index
        this.menuSubList = item.children || []
      }
    })
  }
  get menuList() {
    const routes = this.$store.state.permission.permissionList
    return routes
  }
  private menuFn(item: any, index: number) {
    if (!item.children) {
      const routeUrl = this.$router.resolve({
        name: item.name
      })
      window.open(routeUrl.href, '_blank')
    } else {
      this.activeIndex = index
      this.menuSubList = item.children || []
    }
  }
}
</script>
