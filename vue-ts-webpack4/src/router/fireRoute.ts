/**
 * @author: wenhao.huang
 * @date:   2018/12/22
 * @module: 市政消火栓
 */
const routes = [
  {
    name: 'rootFire',
    path: '/fire',
    redirect: '/fire/gis',
    component: () => import('views/Layout.vue'),
    meta: {
      title: '市政消火栓',
      icon: 'fire-extinguisher',
      auth: true
    },
    children: [
      {
        name: 'fireGis',
        path: '/fire/gis',
        component: () => import('views/Demo.vue'),
        meta: {
          title: '消火栓GIS地图'
        }
      },
      {
        name: 'fireState',
        path: '/fire/state',
        redirect: '/fire/state/list',
        component: () => import('views/Demo.vue'),
        meta: {
          title: '状态信息管理'
        },
        children: [
          {
            name: 'fireStateList',
            path: '/fire/state/list',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '消火栓列表'
            }
          },
          {
            name: 'fireStateSensor',
            path: '/fire/state/sensor',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '传感器列表'
            }
          },
          {
            name: 'fireStateAlarm',
            path: '/fire/state/alarm',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '告警记录'
            }
          },
          {
            name: 'fireStateLine',
            path: '/fire/state/line',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '水压波动图'
            }
          }
        ]
      }
    ]
  }
]

export default routes
