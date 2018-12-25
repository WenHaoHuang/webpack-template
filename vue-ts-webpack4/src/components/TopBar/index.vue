<template>
  <article class="layout-topbar">
    <div class="logo">综合管理平台</div>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class TopBar extends Vue {
  private layoutFn() {
    this.$emit('onClick')
  }
}
</script>
<style lang="scss">
.layout-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  .logo {
    color: #fff;
    font-size: 24px;
  }
}
</style>
