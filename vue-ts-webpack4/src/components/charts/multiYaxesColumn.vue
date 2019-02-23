<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'multi-yaxes-column',
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
      const colors = ['#5793f3', '#d14a61', '#675bba']
      const serise = [],
        yAxis = []
      this.data.value.forEach((item, index) => {
        serise.push({
          name: item.name,
          type: 'bar',
          data: item.data
        })
        if (index == 1) {
          serise[index].yAxisIndex = 1
        }
        yAxis.push({
          type: 'value',
          name: item.name,
          position: 'right',
          offset: 80 * index,
          axisLine: {
            lineStyle: {
              color: colors[index]
            }
          },
          axisLabel: {
            formatter: '{value} ' + item.unit
          }
        })
      })
      const options = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '15%'
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: this.data.axis
          }
        ],
        yAxis: yAxis,
        series: serise
      }
      return options
    }
  }
}
</script>

<style lang="scss">
</style>
