<template>
  <transition
    name="fade-transform"
    mode="out-in"
  >
    <router-view :key="key" />
  </transition>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Pages extends Vue {
  get key() {
    const router: any = this.$router
    return router.fullPath
  }
}
</script>
