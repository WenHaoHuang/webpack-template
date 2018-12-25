<template>
  <el-breadcrumb class="app-breadcrumb"
    separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList"
        v-if="item.meta.title"
        :key="item.path">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1"
          class="no-redirect">{{ item.meta.title }}</span>
        <span v-else
          :to="item.redirect||item.path">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Breadcrumb extends Vue {
  get levelList() {
    const matched = this.$route.matched.filter((item: any) => item.name)
    return matched
  }
}
</script>

<style lang="scss">
.app-breadcrumb {
  &.el-breadcrumb {
    height: 0.96rem;
    line-height: 48px;
    padding: 0 15px;
    border-bottom: 1px solid #ccc;
    .no-redirect {
      color: #999;
      cursor: text;
    }
    .el-breadcrumb__inner {
      color: #333;
    }
    .el-breadcrumb__separator {
      color: #999;
    }
  }
}
</style>
