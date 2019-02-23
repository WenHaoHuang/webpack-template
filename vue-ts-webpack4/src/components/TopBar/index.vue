<template>
  <article class="layout-topbar">
    <!-- 奉贤智慧消防综合管理平台 -->
    <div class="logo">奉贤智慧消防综合管理平台</div>
    <div class="aside-topbar">
      <span class="item-username">{{userName}}</span>
      <span
        @click="jumpFn('user')"
        class="item-aside"
        title="用户管理"
      >
        <i class="fa fa-user" />
      </span>
      <span
        @click="logoutFn"
        class="item-aside"
        title="退出"
      >
        <i class="fa fa-power-off" />
      </span>
    </div>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TopBar extends Vue {
  private userName: string = ''

  private mounted() {
    this.userName = this.$Cookies.get('userName') || ''
  }

  private jumpFn(name: string) {
    this.$emit('onClick')
  }
  private logoutFn() {
    this.$Cookies.remove('accessToken')
    this.$Cookies.remove('userID')
    this.$Cookies.remove('userName')
    this.$router.push({
      name: 'login'
    })
  }
}
</script>
