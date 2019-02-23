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
import MenuBar from 'components/MenuBar/index.vue'
import TopBar from 'components/TopBar/index.vue'
import Breadcrumb from 'components/Breadcrumb/index.vue'

@Component({ components: { MenuBar, TopBar, Breadcrumb } })
export default class Layout extends Vue {}
</script>
