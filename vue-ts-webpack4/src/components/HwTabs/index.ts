/*
 * @Author: huangwenhao
 * @Date: 2019-01-27 16:45:09
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-27 17:13:35
 * @Description: tabs组件
 */
import HwTabItem from './tabItem.vue'
import HwTabs from './tabs.vue'

export default {
  install: (Vue: any) => {
    Vue.component('HwTabItem', HwTabItem)
    Vue.component('HwTabs', HwTabs)
  }
}
export { HwTabs, HwTabItem }
