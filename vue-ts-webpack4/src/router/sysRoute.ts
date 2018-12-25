/**
 * @author: wenhao.huang
 * @date:   2018/12/22
 * @module: 系统管理
 */
const routes: any = [
  {
    name: 'rootSystem',
    path: '/system',
    redirect: '/system/base',
    component: () => import('views/Layout.vue'),
    meta: {
      title: '系统管理',
      icon: 'gears',
      auth: true
    },
    children: [
      {
        name: 'systemBase',
        path: '/system/base',
        redirect: '/system/base/device',
        component: () => import('views/Demo.vue'),
        meta: {
          title: '基础数据管理'
        },
        children: [
          {
            name: 'systemBaseDevice',
            path: '/system/base/device',
            redirect: '/system/base/device/index',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '设备类别管理'
            },
            children: [
              {
                name: 'systemBaseDeviceIndex',
                path: '/system/base/device/index',
                component: () => import('views/Demo.vue'),
                meta: {
                  title: '设备类别管理'
                }
              }
            ]
          }
        ]
      }
    ]
  }
]

export default routes
