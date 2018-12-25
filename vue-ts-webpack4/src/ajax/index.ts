import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000
/**
 * ajax config 转换
 * @param {Object} options :组件请求参数
 * @return {Object} return :返回处理后的参数
 */
function getConfig(options: any): any {
  const url = '/Nivana.beta/' + options.api
  let params = options.params || {}
  if (options.type === 1) {
    params.orgId = localStorage.getItem('orgId')
  } else if (options.type !== 0) {
    params.userId = localStorage.getItem('userId')
    params.accessToken = localStorage.getItem('accessToken')
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
const AJAX = {
  install: (Vue: any) => {
    const self = new Vue()
    // tslint:disable-next-line
    Vue.prototype.$ajax = (options: any, successFn: Function, errorFn?: Function) => {
      return new Promise(() => {
        const CONFIG: any = getConfig(options)
        axios
          .post(CONFIG.url, CONFIG.params)
          .then(response => {
            const data = response.data
            if (data.retCode === 'ACK') {
              successFn(data)
            } else if (data.retCode === 'FAT') {
              location.hash = '#/login'
            } else {
              self.$message.error(data.retDescription)
              if (typeof errorFn === 'function') {
                errorFn(data)
              }
            }
          })
          .catch(error => {
            if (typeof errorFn === 'function') {
              errorFn(error)
            }
          })
      })
    }
  }
}
export default AJAX
