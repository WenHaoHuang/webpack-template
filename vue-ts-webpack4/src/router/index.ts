/**
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-02-19 16:30:55
 * @Description: router控制
 */
import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css' // Progress 进度条样式
import store from './../store/index'

Vue.use(Router)
// NProgress Configuration
NProgress.configure({ showSpinner: false })

const routes = [
  {
    name: 'index',
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('views/Login.vue'),
    meta: {
      title: '登录'
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
    name: 'home',
    path: '/index',
    redirect: '/general/message/interactive'
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
  document.title = title + '后台管理系统'
  // 判断本地是否有token信息
  if (to.name === 'login') {
    next()
  } else if (store.getters.token) {
    // 判断本地是否有token信息
    if (store.state.permission.permissionList) {
      // 如果没有permissionList
      if (to.name && to.path === '/') {
        next({ name: 'NoFound' })
      } else {
        next()
      }
    } else {
      store.dispatch('setPermissionList', () => {
        next({ ...to, replace: true })
      })
    }
  } else {
    NProgress.done()
    next({ name: 'login' })
  }
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router
