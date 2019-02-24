/**
 * @Author: huangwenhao
 * @LastEditors: huangwenhao
 * @Description: main.ts
 * @Date: 2019-02-23 20:00:07
 * @LastEditTime: 2019-02-24 16:53:17
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
