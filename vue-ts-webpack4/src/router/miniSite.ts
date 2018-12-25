/**
 * 微型消防站
 */
const routes = [
  {
    name: 'rootMiniSite',
    path: '/minisite',
    redirect: '/minisite/index',
    component: () => import('views/Layout.vue'),
    meta: {
      title: '微型消防站',
      icon: 'ioxhost',
      auth: true
    },
    children: [
      {
        name: 'minisiteIndex',
        path: '/minisite/index',
        component: () => import('views/Demo.vue'),
        meta: {
          title: '消火栓GIS地图'
        }
      }
    ]
  }
]
export default routes
