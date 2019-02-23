// 组织机构维护
<template>
  <section>
    <div class="pages-header">
      <div class="bar-main">
        <div class="label-md">根据机构类型查询：</div>
        <el-select
          clearable
          v-model="orgId"
          class="bar-md mr20"
          placeholder="请选择机构类型"
        >
          <el-option
            v-for="item in orgLists"
            :key="item.id"
            :label="item.type"
            :value="item.codeId"
          >
          </el-option>
        </el-select>
        <el-button
          :loading="loading"
          @click="getListFn"
          type="primary"
          icon="el-icon-search"
        >查询</el-button>
      </div>
      <div class="bar-aside">
        <el-button
          @click="addItemFn"
          type="primary"
          icon="el-icon-plus"
        >新增</el-button>
        <el-button
          type="danger"
          icon="el-icon-delete"
          :disabled="selectData.length <= 0"
          @click="deleteList"
        >批量删除</el-button>
      </div>
    </div>
    <div class="pages-main">
      <el-table
        border
        stripe
        :data="lists"
        v-loading="loading"
        @selection-change="handleSelectionChange"
        class="hw-table"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="codeId"
          label="CodeId"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="150"
        >
          <template slot-scope="scope">
            <span
              class="btn-text text-primary"
              @click="editItemFn(scope.row.codeId)"
            >修改</span>
            <span
              class="btn-text text-danger"
              @click="deleteItemFn(scope.row.codeId)"
            >删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <transition
      name="fade"
      mode="out-in"
    >
      <hw-dialog
        :title="isAdd ? '新增' : '修改'"
        v-if="showModal"
        @onCancel="showModal = false"
        @onConfirm="onConfirmFn"
      >
        content
      </hw-dialog>
    </transition>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class PageDemo extends Vue {
  // data
  private loading: boolean = false
  private lists: object = []
  private orgLists: object = []
  private orgId: string = ''
  private showModal: boolean = false
  private selectData: object = []
  // add or update
  private isAdd: boolean = true

  // mounted
  private mounted() {
    this.getListFn()
    this.getOrgList()
  }

  // methods
  private getOrgList() {
    this.$ajax(
      {
        api: 'sys/orgtype_list'
      },
      response => {
        this.orgLists = response.data
      }
    )
  }
  private getListFn() {
    console.log('lists')
  }
  private onConfirmFn() {
    console.log('新增/修改确认')
  }
  private addItemFn() {
    console.log('新增')
  }
  private editItemFn() {
    console.log('编辑')
  }
  private deleteItemFn() {
    console.log('删除')
    const callback = () => {
      this.$ajax(
        {
          api: 'sys',
          params: {}
        },
        response => {
          this.$message.success('删除成功!')
          this.getListFn()
        }
      )
    }
    this.$util.confirm({}, callback)
  }
  private deleteList() {
    console.log('批量删除')
  }
  private handleSelectionChange(selectData) {
    this.selectData = selectData
  }
}
</script>
