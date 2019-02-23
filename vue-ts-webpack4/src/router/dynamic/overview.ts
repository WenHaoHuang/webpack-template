/*
 * @Author: huangwenhao
 * @Date: 2019-01-24 23:45:34
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-27 20:31:48
 * @Description: 指挥大屏
 */
const routes = [
  {
    name: 'rootView',
    path: '/overview',
    component: () => import('views/overview/index.vue'),
    meta: {
      title: '指挥大屏',
      icon: 'flag'
    }
  }
]

export default routes
