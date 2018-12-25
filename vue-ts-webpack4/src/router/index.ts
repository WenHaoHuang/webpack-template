import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import store from './../store'
// 初始化路由
import Default from './default'
// 综合管理
import generalRoutes from './general'
// 微型消防站
import miniSites from './miniSite'
// 市政消火栓
import fireRoutes from './fireRoute'
// 物联网感知
import internetRoutes from './internet'
// 系统管理
import sysRoutes from './sysRoute'
// 404
import NoFound from './error'

Vue.use(Router)

const routes = [...Default, ...generalRoutes, ...miniSites, ...fireRoutes, ...internetRoutes, ...sysRoutes, ...NoFound]

const router = new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = to.meta.title + ' | webpack4'
  // 判断本地是否有token信息
  if (to.name === 'login') {
    next()
  } else if (store.getters.token) {
    next()
  } else {
    NProgress.done()
    next({ name: 'login' })
  }
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})
export default router
