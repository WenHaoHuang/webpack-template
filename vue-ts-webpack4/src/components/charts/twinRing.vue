<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'twin-ring',
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
        color: ['#FF024F', '#43B7F1'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '15%',
          containLabel: true
        },
        series: [
          {
            name: data[0].name,
            type: 'pie',
            radius: ['40%', '50%'],
            label: { normal: { show: false } },
            clockwise: false,
            legendHoverLink: false,
            hoverAnimation: false,
            data: [
              {
                value: data[0]['value'],
                name: data[0].name,
                label: { normal: { show: true, position: 'inner', formatter: '{a}:{d}%' } }
              },
              {
                value: 100 - data[0]['value'],
                name: '',
                itemStyle: { normal: { color: '#FFF' } }
              }
            ]
          },
          {
            name: data[1].name,
            type: 'pie',
            radius: ['60%', '70%'],
            label: { normal: { position: 'inner' } },
            clockwise: false,
            legendHoverLink: false,
            hoverAnimation: false,
            data: [
              {
                value: data[1]['value'],
                name: data[1].name,
                label: { normal: { position: 'inner', formatter: '{a}:{d}%' } }
              },
              {
                value: 100 - data[1]['value'],
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
