/**
 * 物联网感知
 */
const routes = [
  {
    name: 'rootInternet',
    path: '/internet',
    redirect: '/internet/index',
    component: () => import('views/Layout.vue'),
    meta: {
      title: '物联网感知',
      icon: 'ge',
      auth: true
    },
    children: [
      {
        name: 'internetIndex',
        path: '/internet/index',
        component: () => import('views/Demo.vue'),
        meta: {
          title: '消火栓GIS地图'
        }
      }
    ]
  }
]
export default routes
