<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'basic-radar',
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
        axis = []
      let max = 0
      data.value.forEach(item => {
        legend.push(item.name)
        let _max = Math.max.apply(Math, item.value)
        max = _max > max ? _max : max
      })
      data.axis.forEach(item => {
        axis.push({
          name: item,
          max: max
        })
      })
      const options = {
        tooltip: {},
        legend: {
          data: legend
        },
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: axis
        },
        series: [
          {
            name: data.name,
            type: 'radar',
            data: data.value
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
