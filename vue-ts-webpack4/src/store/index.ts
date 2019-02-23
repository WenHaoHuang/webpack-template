/*
 * @Author: huangwenhao
 * @Date: 2019-01-23 11:11:58
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-27 16:14:35
 * @Description: vuex store
 */
import Vue from 'vue'
import Vuex from 'vuex'
// modules:路由权限控制
import permission from './modules/permission'
// 指挥大屏
import overview from './modules/overview'

Vue.use(Vuex)

const self: any = new Vue()

const state: any = {
  menu: [],
  token: '',
  loading: false
}
const getters: any = {
  menu(context: { state: any }) {
    state.menu = localStorage.getItem('menu')
    return state.menu
  },
  token(context: { state: any }) {
    state.token = self.$Cookies.get('accessToken')
    return state.token
  }
}
const mutations: any = {
  SET_TOKEN(context: { state: any }, data: any) {
    state.token = data
  },
  SET_LOCK(context: { state: any }, lock: boolean) {
    state.loading = lock
  }
}
const actions: any = {
  setToken(context: { commit: any }, data: string) {
    context.commit('SET_TOKEN', data)
  },
  setLock(context: { commit: any }, lock: boolean) {
    context.commit('SET_LOCK', lock)
  }
}

const Store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    permission,
    overview
  }
})

export default Store
