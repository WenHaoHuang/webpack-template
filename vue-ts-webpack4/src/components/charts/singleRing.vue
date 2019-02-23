<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'single-ring',
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
      const data = this.data.data
      const options = {
        color: ['#43B7F1'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '15%',
          containLabel: true
        },
        series: [
          {
            name: data.name,
            type: 'pie',
            radius: ['60%', '70%'],
            label: { normal: { position: 'inner' } },
            clockwise: false,
            legendHoverLink: false,
            hoverAnimation: false,
            data: [
              {
                value: data['value'],
                name: data.name,
                label: { normal: { position: 'inner', formatter: '{a}:{d}%' } }
              },
              {
                value: 100 - data['value'],
                name: '',
                itemStyle: { normal: { color: '#FFF' } }
              }
            ]
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
