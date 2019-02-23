<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'multi-bar',
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
        series = []
      data.value.forEach(item => {
        series.push({
          name: item.name,
          type: 'bar',
          data: item.data
        })
      })
      const options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          data: data.axis
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        series: series
      }
      return options
    }
  }
}
</script>

<style lang="scss">
</style>
