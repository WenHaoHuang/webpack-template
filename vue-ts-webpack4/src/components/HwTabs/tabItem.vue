<!--
 * @Author: huangwenhao
 * @Date: 2019-01-27 16:45:57
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-27 20:26:27
 * @Description: tabs组件
 -->
<template>
  <section>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HwTabItem extends Vue {
  @Prop({ type: String, default: '' }) private title: string
  @Prop({ type: String, default: '' }) private value: string

  private isTabItem: boolean = false
  private mounted() {
    this.isTabItem = true
  }
}
</script>
