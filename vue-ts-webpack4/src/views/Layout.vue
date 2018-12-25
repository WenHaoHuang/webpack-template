<template>
  <div class="layout-root">
    <!-- 顶部 -->
    <top-bar />
    <!-- 侧边栏菜单 -->
    <menu-bar />
    <breadcrumb class="layout-breadcrumb" />
    <!-- 主视图 -->
    <router-view class="layout-main" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MenuBar from 'components/MenuBar'
import TopBar from 'components/TopBar'
import Breadcrumb from 'components/Breadcrumb'

@Component({ components: { MenuBar, TopBar, Breadcrumb } })
export default class Layout extends Vue {}
</script>
<style lang="scss">
@import '~styles/var';
.layout-root {
  position: relative;
  padding-left: $menuWidth;
  padding-top: $topHeight * 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: $bgColor;
  .layout-aside {
    position: absolute;
    z-index: 2;
    left: 0;
    top: $topHeight;
    bottom: 0;
    width: $menuWidth;
  }
  .layout-content {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
  }
  .layout-topbar {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    right: 0;
    height: $topHeight;
    background-color: $topBg;
  }
  .layout-main {
    padding: 10px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .layout-breadcrumb {
    position: absolute;
    z-index: 2;
    left: $menuWidth;
    top: $topHeight;
    right: 0;
    height: $topHeight;
    background-color: $white;
  }
}
</style>
