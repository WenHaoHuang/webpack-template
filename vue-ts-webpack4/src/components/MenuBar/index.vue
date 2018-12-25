
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
        <a href="#"
          target="_blank"
          class="menu-nav">
          <i class="fa fa-flag" /> 指挥中心 </a>
        <div class="menu-nav"
          v-for="(item,index) in menuList"
          :key="item.id"
          :class="{'active':index === activeIndex}"
          @click="menuFn(item,index)">
          <i class="fa"
            :class="`fa-${item.meta.icon}`" />{{item.meta.title}}</div>
      </el-scrollbar>
      <div class="item-slider"
        :style="{'top':(activeIndex + 1) * 120 + 'px'}"></div>
    </div>
    <div class="layout-menu-sub">
      <div class="title-sub">{{menuList[activeIndex].meta.title}}</div>
      <el-scrollbar>
        <template v-if="menuSubList.length > 0">
          <nav-menu v-for="item in menuSubList"
            :key="item.id"
            :item="item"
            class="menu-sub" />
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
    this.menuList.map((item, index) => {
      if (route.path.includes(item.path)) {
        this.activeIndex = index
        this.menuSubList = item.children || []
      }
    })
  }
  get menuList() {
    const router: any = this.$router
    const routes = router.options.routes
    const list: any = routes.filter((v: any) => v.children)
    return list
  }
  private menuFn(item, index) {
    this.activeIndex = index
    this.menuSubList = item.children || []
  }
}
</script>
<style lang="scss">
@import '~styles/var';
.layout-aside {
  position: relative;
  padding-left: $menuWidthNav;
  user-select: none;
  .item-slider {
    position: absolute;
    content: '';
    z-index: 3;
    left: 0;
    top: 0;
    width: 4px;
    height: $menuWidthNav;
    background-color: $menuHover;
    transition: all 0.3s ease-out 0s;
  }
  .layout-menu-nav,
  .layout-menu-sub {
    height: 100%;
  }
  .layout-menu-nav {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    bottom: 0;
    width: $menuWidthNav;
    color: #fff;
    background-color: $menuBg;
    .menu-nav {
      position: relative;
      height: $menuWidthNav;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease-out 0s;
      .fa {
        font-size: 0.6rem;
        margin-bottom: 0.3rem;
      }
      &:hover,
      &.active {
        color: $menuHover;
      }
      &.active {
        background-color: $menuBgHover;
      }
    }
  }
  .layout-menu-sub {
    position: relative;
    padding-top: 0.96rem;
    border-right: 1px solid #ecedee;
    background-color: #ecedee;
    .title-sub {
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
      right: 0;
      text-align: center;
      height: 0.96rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 0.32rem;
      background-color: $menuBg;
    }
  }
  .el-scrollbar {
    height: 100%;
    overflow-y: auto;
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>
