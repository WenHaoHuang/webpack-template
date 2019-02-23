<template>
  <el-breadcrumb
    class="app-breadcrumb"
    separator="/"
  >
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item,index) in levelList"
        v-if="item.meta.title"
        :key="item.path"
      >
        <span
          v-if="item.redirect==='noredirect'||index==levelList.length-1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <span
          v-else
          :to="item.redirect||item.path"
        >{{ item.meta.title }}</span>
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
