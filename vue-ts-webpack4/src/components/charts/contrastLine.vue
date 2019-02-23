<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'contrast-line',
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
      const serise = [],
        axis = []
      if (data.value.length > 0) {
        data.value[0].data.forEach((item, index) => {
          axis.push(index + 1)
        })
        data.value.forEach(item => {
          serise.push({
            name: item.name,
            type: 'line',
            smooth: true,
            stack: item.name,
            data: item.data
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
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: axis
        },
        series: serise
      }
      return options
    }
  }
}
</script>

<style lang="scss">
</style>
