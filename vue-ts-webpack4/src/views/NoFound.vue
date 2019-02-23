<template>
  <article class="layout-404">
    <div class="item-title">404</div>
    <el-button
      type="primary"
      size="small"
      @click="toHomeFn"
    >返回首页</el-button>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class NoFound extends Vue {
  private toHomeFn() {
    this.$router.push({
      path: '/index'
    })
  }
}
</script>
