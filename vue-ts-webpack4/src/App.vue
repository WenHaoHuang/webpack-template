<template>
  <div id="app">
    <router-view class="layout-root" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {}
</script>
