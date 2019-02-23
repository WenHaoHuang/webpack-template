/**
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-02-23 19:24:15
 * @Description: router控制
 */
import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css' // Progress 进度条样式

Vue.use(Router)
// NProgress Configuration
NProgress.configure({ showSpinner: false })

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    component: () => import('./../views/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'NoFound',
    path: '/404',
    component: () => import('views/NoFound.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  const title: string = to.meta && to.meta.title ? to.meta.title + ' | ' : ''
  document.title = title + 'vue+ts+webpack4'
  next()
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router
