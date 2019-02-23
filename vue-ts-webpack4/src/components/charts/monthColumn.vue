<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'month-column',
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
        axis = [],
        series = []
      if (data.value.length > 0) {
        data.value[0]['data'].forEach((item, index) => {
          axis.push(index + 1)
        })
        data.value.forEach(item => {
          series.push({
            data: item.data,
            name: item.name,
            stack: 'month',
            type: 'bar'
          })
        })
      }
      const options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          data: axis
        },
        yAxis: {
          type: 'value'
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
