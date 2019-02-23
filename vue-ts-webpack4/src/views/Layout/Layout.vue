<!--
 * @Author: huangwenhao
 * @Date: 2019-01-17 17:07:45
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-24 19:53:19
 * @Description: layout
 -->
<template>
  <div class="layout-root">
    <!-- top-bar -->
    <top-bar />
    <div class="layout-content">
      <!-- 侧边栏菜单 -->
      <menu-bar />
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
      <el-scrollbar
        wrap-class="layout-scroll-wrap"
        viewClass="layout-scroll-main"
      >
        <Breadcrumb></Breadcrumb>
        <router-view class="layout-main" />
      </el-scrollbar>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MenuBar from 'components/MenuBar/index.vue'
import TopBar from 'components/TopBar/index.vue'
import Breadcrumb from 'components/Breadcrumb/index.vue'

@Component({ components: { MenuBar, TopBar, Breadcrumb } })
export default class Layout extends Vue {}
</script>
<style lang="scss">
@import '~styles/var';
.layout-root {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: $topHeight;
  overflow: hidden;
  background-color: $bgColor;
  position: relative;
  .layout-aside {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    bottom: 0;
    width: $menuWidth;
    transition: all 0.3s;
  }
  .layout-content {
    position: relative;
    padding-left: $menuWidth;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    > .el-scrollbar {
      height: 100%;
      overflow-y: auto;
      background-color: $white;
      > .layout-scroll-wrap {
        overflow-x: hidden;
      }
    }
    &:before {
      position: absolute;
      content: '';
      z-index: 2;
      left: 0;
      right: 0;
      top: 0;
      height: 6px;
      background: linear-gradient(to bottom, rgba(120, 120, 120, 0.6), rgba(120, 120, 120, 0));
    }
  }
  .layout-topbar {
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    height: $topHeight;
    background-color: $topBg;
  }
  .layout-main {
    padding: 15px;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transition: all 0.2s;
    background-color: #fff;
  }
}
</style>
