<!--
 * @Author: huangwenhao
 * @Date: 2018-12-29 00:12:03
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-30 22:31:59
 * @Description: 分页插件
 -->
<template>
  <section class="section-pagination">
    <div class="aside-pagination">
      共有 {{ total }} 条，每页 {{ pageSize }} 条<span v-if="total > 0">，当前
        {{start}}
        -
        {{end}}</span>
    </div>
    <el-pagination
      background
      v-if="total > 0"
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      @current-change="pageChange"
    >
    </el-pagination>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class HwPagination extends Vue {
  @Prop({ default: 0 }) private total: number
  @Prop({ default: 1 }) private pageIndex: number
  @Prop({ default: 15 }) private pageSize: number

  get start() {
    return this.pageSize * (this.pageIndex - 1) + 1
  }
  get end() {
    const endSize = this.pageSize * this.pageIndex
    return endSize > this.total ? this.total : endSize
  }
  private pageChange(page) {
    this.$emit('pageChange', page)
  }
}
</script>
