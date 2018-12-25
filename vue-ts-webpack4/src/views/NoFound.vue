<template>
  <article class="layout-404">
    <div class="item-title">404</div>
    <el-button type="primary"
      size="small"
      @click="toHomeFn">返回首页</el-button>
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
<style lang="scss">
.layout-404 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .item-title {
    font-size: 96px;
  }
}
</style>
