<template>
  <article>
    <div class="page-tbody">
      <el-table class="table"
        stripe
        border
        :data="list">
        <el-table-column prop="date"
          label="公告标题"
          width="180">
        </el-table-column>
        <el-table-column prop="name"
          label="公告摘要"
          width="180">
        </el-table-column>
        <el-table-column prop="address"
          label="发布时间">
        </el-table-column>
        <el-table-column prop="address"
          label="发布人">
        </el-table-column>
        <el-table-column prop="address"
          label="操作">
        </el-table-column>
      </el-table>
    </div>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
interface PageOpt {
  pageIndex: number
  pageSize: number
  total: number
}

@Component({})
export default class Notice extends Vue {
  private search: string
  private list: object = []
  private pageBean: PageOpt = {
    pageIndex: 1,
    pageSize: 20,
    total: 0
  }
  private mounted() {
    this.getList()
  }
  private getList() {
    this.$ajax(
      {
        api: 'mfs/noticeList',
        params: Object.assign(this.pageBean, {
          search: this.search
        })
      },
      response => {
        console.log(response)
      }
    )
  }
}
</script>
