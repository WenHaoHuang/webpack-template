<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'basic-bar',
  components: { EChart },
  props: {
    data: {},
    height: {
      type: String,
      default: '600px'
    }
  },
  computed: {
    chartOpt() {
      const data = this.data
      const options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        yAxis: {
          type: 'category',
          data: data.axis
        },
        xAxis: {
          type: 'value'
        },
        series: [
          {
            data: data.value,
            type: 'bar'
          }
        ]
      }
      return options
    }
  }
}
</script>

<style lang="scss">
</style>
