/**
 * 全局自定义指令
 */
const directive = {
  install: (Vue: any) => {
    // 性别
    Vue.directive('sex', (el: any, binding: any) => {
      const value: any = binding.value
      el.innerHTML = value !== 'M' ? (value === 'F' ? '女' : '保密') : '男'
    })
    // 状态
    Vue.directive('state', (el: any, binding: any) => {
      const value: any = binding.value
      switch (value) {
        case 0:
          el.innerHTML = '禁用'
          el.className = 'text-danger'
          break
        case 1:
          el.innerHTML = '启用'
          el.className = 'text-success'
          break
        default:
          el.innerHTML = '未知'
      }
    })
    // 结果
    Vue.directive('faulty', (el: any, binding: any) => {
      const value: any = binding.value
      switch (value) {
        case 0:
          el.innerHTML = '正常'
          el.className = 'text-success'
          break
        case 1:
          el.innerHTML = '损坏'
          el.className = 'text-danger'
          break
        default:
          el.innerHTML = '未知'
      }
    })
  }
}
export default directive
