<template>
  <article class="wrapper">
    <el-button @click="tableFn">表格</el-button> {{$router.options.routes}}
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
  private tableFn() {
    this.$router.push({
      name: 'exampleTable1212'
    })
  }
}
</script>
