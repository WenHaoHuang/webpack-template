<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'polar-bar',
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
      const data = this.data,
        legend = [],
        series = []
      data.value.forEach(item => {
        legend.push(item.name)
        series.push({
          type: 'bar',
          data: item.data,
          coordinateSystem: 'polar',
          name: item.name,
          stack: data.name
        })
      })
      const options = {
        angleAxis: {
          type: 'category',
          data: data.axis,
          z: 10
        },
        radiusAxis: {},
        polar: {},
        series: series,
        legend: {
          show: true,
          data: legend
        }
      }
      return options
    }
  }
}
</script>

<style lang="scss">
</style>
