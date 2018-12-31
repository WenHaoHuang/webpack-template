<template>
  <article class="article-login">
    <div class="section-main">
      <div class="section-thead text-center">webpack4</div>
      <div class="section-tbody mt40">
        <el-form :model="formData"
          status-icon
          :rules="rules"
          ref="form">
          <el-form-item prop="userName">
            <el-input type="text"
              clearable
              size="medium"
              v-model="formData.userName"
              prefix-icon="el-icon-tickets"
              autocomplete="off" />
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input type="password"
              clearable
              size="medium"
              prefix-icon="el-icon-tickets"
              v-model="formData.userPwd"
              autocomplete="off" />
          </el-form-item>
          <el-form-item prop="orgId">
            <el-select class="org-select"
              popper-class="cell-org"
              v-model="formData.orgId"
              size="large"
              placeholder="请选择机构">
              <el-option v-for="item in orgList"
                :key="item.orgId"
                :value="item.orgId"
                :label="item.orgName">
                <span class="item-name">{{ item.orgName }}</span>
                <span class="item-type">{{ item.orgType }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="section-tfoot mt40">
        <el-button type="primary"
          class="btn-submit"
          size="medium"
          :loading="loading"
          @click="submitFn('form')">登录</el-button>
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
          const data = response.data
          const userInfo = data.userInfo
          const menuList = data.menuList
          const token = data.token
          sessionStorage.setItem('USER', JSON.stringify(userInfo))
          this.$store.dispatch('setMenuList', menuList)
          this.$store.dispatch('setToken', token)
          this.$router.push({
            path: '/index'
          })
        },
        () => {
          this.loading = false
          this.$store.dispatch('setToken', 'accessToken')
          this.$router.push({
            path: '/index'
          })
        }
      )
    })
  }
}
</script>
<style lang="scss">
.article-login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .section-main {
    width: 300px;
  }
  .section-thead {
    font-size: 24px;
  }
  .btn-submit {
    display: block;
    width: 100%;
    text-align: center;
  }
  .org-select {
    width: 100%;
  }
}
.cell-org {
  .el-select-dropdown__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .item-type {
      color: #999;
      font-size: 12px;
    }
  }
}
</style>
