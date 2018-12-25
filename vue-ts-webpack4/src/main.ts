import Vue from 'vue'
import App from './App.vue'
import ajax from './ajax'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/style.scss'

Vue.use(ajax)
Vue.use(ElementUI)
Vue.config.productionTip = false

export default new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
