<!--
 * @Author: huangwenhao
 * @Date: 2019-01-27 16:40:43
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-30 22:30:12
 * @Description: tabs组件
 -->
<template>
  <section>
    <section class="hw-tabs">
      <div
        class="item"
        v-for="tab in tabItems"
        :key="tab.id"
        @click.prevent="handleSelect(tab)"
        v-html="tab.title"
        :class="{'active':tab.value === activeIndex}"
      >
      </div>
    </section>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HwTabs extends Vue {
  @Prop({ type: String, default: '' }) private activeIndex: string
  private tabItems: object[] = []
  private selectedIndex: string = ''

  private mounted() {
    this.tabItems = this.$children.filter((v: any) => v.isTabItem)
  }
  private handleSelect(item: any) {
    if (item.value !== this.activeIndex) {
      this.$emit('onClick', item.value)
    }
  }
}
</script>
