<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'ring-pie',
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
      const axis = []
      if (data.data.outside.length > 0) {
        data.data.outside.forEach(item => {
          axis.push(item.name)
        })
      }
      const options = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: 10,
          data: axis
        },
        series: [
          {
            name: data.name,
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data.data.inside
          },
          {
            name: data.name,
            type: 'pie',
            radius: ['40%', '55%'],
            data: data.data.outside
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
