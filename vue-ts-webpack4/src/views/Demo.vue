<template>
  <article>{{message}}</article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Demo extends Vue {
  get message() {
    const route = this.$route
    return route.meta.title + ' ' + route.fullPath
  }
}
</script>
