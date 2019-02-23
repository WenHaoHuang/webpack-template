<template>
  <div
    class="chart-content"
    :style="styleFn"
  >{{data.content}}</div>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'chart-content',
  components: { EChart },
  props: {
    data: {}
  },
  computed: {
    styleFn() {
      const level = this.data.level
      let _style = '',
        fontSize = 0.24 + 0.04 * level
      if (level > 1) {
        _style += 'font-weight:600;'
      }
      _style += `font-size:${fontSize}rem`
      return _style
    }
  }
}
</script>

<style lang="scss">
.chart-content {
  padding: 0.2rem 0;
}
</style>
