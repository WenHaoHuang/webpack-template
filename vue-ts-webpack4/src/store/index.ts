import Vue from 'vue'
import Vuex from 'vuex'
// modules:路由权限控制
// import permission from './modules/permission'
import user from './modules/user'

Vue.use(Vuex)

const state: any = {
  token: '',
  menuList: []
}
const getters: any = {
  token(context: { state: any }) {
    state.token = localStorage.getItem('token')
    return state.token
  },
  menuList(context: { state: any }) {
    state.menuList = []
    return state.menuList
  }
}
const mutations: any = {
  SET_TOKEN(context: { state: any }, data: any) {
    state.token = data
    localStorage.setItem('token', state.token)
  }
}
const actions: any = {
  setToken(context: { commit: any }, data: any) {
    context.commit('SET_TOKEN', data)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // permission,
    user
  }
})

export default store
