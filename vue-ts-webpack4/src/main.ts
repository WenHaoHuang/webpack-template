/**
 * @Author: huangwenhao
 * @LastEditors: huangwenhao
 * @Description: main.ts
 * @Date: 2019-02-23 17:31:02
 * @LastEditTime: 2019-02-23 19:15:29
 */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'styles/style.scss'

Vue.config.productionTip = false

export default new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
