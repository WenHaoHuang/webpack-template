<template>
  <article class="article-login">
    <div class="section-main">
      <div class="section-thead text-center">中后台管理系统</div>
      <div class="section-tbody mt40">
        <el-form
          :model="formData"
          status-icon
          :rules="rules"
          ref="form"
        >
          <el-form-item prop="userName">
            <el-input
              type="text"
              clearable
              size="medium"
              v-model="formData.userName"
              prefix-icon="el-icon-tickets"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input
              type="password"
              clearable
              size="medium"
              prefix-icon="el-icon-tickets"
              v-model="formData.userPwd"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item prop="orgId">
            <el-select
              class="org-select"
              popper-class="cell-org"
              v-model="formData.orgId"
              size="large"
              placeholder="请选择机构"
            >
              <el-option
                v-for="item in orgList"
                :key="item.orgId"
                :value="item.orgId"
                :label="item.orgName"
              >
                <span class="item-name">{{
                  item.orgName
                  }}</span>
                <span class="item-type">{{
                  item.orgType
                  }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="section-tfoot mt40">
        <el-button
          type="primary"
          class="btn-submit"
          size="medium"
          :loading="loading"
          @click="submitFn('form')"
        >登录</el-button>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Login extends Vue {
  private formData: any = {
    userName: 'admin',
    userPwd: '123456',
    orgId: '0'
  }
  private orgList: any = []
  private rules: object = {
    userName: [
      {
        required: true,
        message: '请输入账号信息',
        trigger: 'change'
      }
    ]
  }
  private loading: boolean = false
  private mounted() {
    this.getOrgList()
  }
  // 获取机构列表
  private getOrgList() {
    this.$ajax(
      {
        api: 'listOrg',
        type: 0
      },
      (response: any) => {
        this.orgList = response.list
      }
    )
  }
  private submitFn(formName: any) {
    const el: any = this.$refs[formName]
    el.validate((valid: boolean) => {
      if (!valid) {
        return false
      }
      this.loading = true
      this.$ajax(
        {
          api: 'login',
          type: 0,
          params: {
            userLogin: this.formData.userName + '@' + this.formData.orgId,
            password: this.formData.userPwd
          }
        },
        (response: any) => {
          this.loading = false
          const userInfo = response.data
          const menuList = response.menu
          this.$Cookies.set('accessToken', response.accessToken, { expires: 7 })
          this.$Cookies.set('userID', response.userID, { expires: 7 })
          this.$Cookies.set('userName', response.userName, { expires: 7 })
          this.$Cookies.set('orgId', this.formData.orgId, { expires: 7 })
          this.$store.dispatch('setToken', response.accessToken)
          this.$router.push({
            path: '/index'
          })
        },
        () => {
          this.loading = false
        }
      )
    })
  }
}
</script>
