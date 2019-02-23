/**
 * 公用方法封装
 */
import Vue from 'vue'

const self = new Vue()

const utils: object = {
  confirm(options: object, callback: () => void, catchFn?: (action: string) => void): void {
    const option: any = Object.assign(
      {
        msg: '删除后不可恢复，请确认是否删除？',
        title: '确认消息',
        type: 'warning'
      },
      options
    )
    self
      .$confirm(option.msg, option.title, {
        type: option.type
      })
      .then(() => {
        callback()
      })
      .catch((action: string) => {
        if (typeof catchFn === 'function') {
          catchFn(action)
        }
      })
  },
  dataBind(item: object) {
    return JSON.parse(JSON.stringify(item))
  },
  formatterIsJob(row: any, column: any, cellValue: any, index: number) {
    return cellValue ? '在岗' : '离职'
  }
}

const UTILS = {
  install: () => {
    Vue.prototype.$util = utils
  }
}

export default UTILS
