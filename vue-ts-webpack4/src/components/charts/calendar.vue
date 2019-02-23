<template>
  <e-chart
    :options="chartOpt"
    :style="{height:height}"
  ></e-chart>
</template>

<script>
import EChart from 'components/Echart/index.vue'
export default {
  name: 'calendar',
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
      let rangeItem = this.$utils.format(new Date(data[0][0]), 'yyyy-MM')
      const options = {
        calendar: {
          top: 'middle',
          left: 'center',
          orient: 'vertical',
          cellSize: [80, 80],
          yearLabel: {
            show: false
          },
          dayLabel: {
            margin: 20,
            firstDay: 0,
            textStyle: { color: '#009CD7' },
            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
          },
          monthLabel: {
            show: false
          },
          range: rangeItem
        },
        series: [
          {
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            label: {
              normal: {
                show: true,
                formatter: function(params) {
                  const dd = params.value[0].split('-')[2]
                  return dd
                },
                offset: [-30, -30],
                textStyle: {
                  color: '#000',
                  fontSize: 14
                }
              }
            },
            symbolSize: function(val) {
              let _val = Math.sqrt(val[1] * 4 + 0.01)
              _val = _val > 80 ? 80 : _val
              return _val
            },
            data: data
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
