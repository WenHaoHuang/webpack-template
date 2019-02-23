import Vue from 'vue'
import App from './App.vue'
import ajax from './ajax'
import router from './router'
import store from './store'
import Cookie from 'js-cookie'
import utils from './utils'
import directive from './diretive'
import ElementUI from 'element-ui'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/style.scss'
import HwPagination from 'components/HwPagination/index.vue'
import HwDialog from 'components/HwDialog/index.vue'
import HwLabel from 'components/HwLabel/index.vue'
import HwLabelItem from 'components/HwLabel/item.vue'

Vue.use(ajax)
Vue.use(utils)
Vue.use(directive)
Vue.prototype.$Cookies = Cookie
Vue.use(ElementUI)
Vue.component('hw-pagination', HwPagination)
Vue.component('hw-dialog', HwDialog)
Vue.component('hw-label', HwLabel)
Vue.component('hw-label-item', HwLabelItem)

Vue.config.productionTip = false

export default new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
