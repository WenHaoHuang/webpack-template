/*
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-27 20:27:14
 * @Description: ajax请求统一处理
 */
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import store from './../store/index'
import router from '@/router'

const self = new Vue()

axios.defaults.timeout = 5000
axios.defaults.headers['content-type'] = 'application/json'
/**
 * ajax config 转换
 * @param {Object} options :组件请求参数
 * @return {Object} return :返回处理后的参数
 */
function getConfig(options: any): any {
  const url = '/api/' + options.api
  let params = options.params || {}
  if (options.type !== 0) {
    params.userId = self.$Cookies.get('userID') || ''
    params.accessToken = self.$Cookies.get('accessToken') || ''
  }
  params = qs.stringify(params)
  return {
    url,
    params
  }
}
/**
 * ajax请求统一封装
 */
const ajax = async (options: any, successFn: (response: ObjectRes) => void, errorFn?: (error: any) => void) => {
  store.dispatch('setLock', true)
  return new Promise(() => {
    const CONFIG: any = getConfig(options)
    axios
      .post(CONFIG.url, CONFIG.params)
      .then(response => {
        const data: ObjectRes = response.data
        if (data.retCode === 'ACK') {
          successFn(data)
        } else if (data.retCode === 'UER') {
          router.push({ name: 'login' })
        } else {
          self.$message.error(data.retDescription)
          if (typeof errorFn === 'function') {
            errorFn(data)
          }
        }
        store.dispatch('setLock', false)
        // resolve('success')
      })
      .catch(error => {
        if (typeof errorFn === 'function') {
          errorFn(error)
        }
        store.dispatch('setLock', false)
        // reject('error')
      })
  })
}
const AJAX = {
  install: (element: any) => {
    element.prototype.$ajax = ajax
  }
}
export const fetch = ajax
export default AJAX
