<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'basic-scatter',
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
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: data.data,
            type: 'scatter'
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
