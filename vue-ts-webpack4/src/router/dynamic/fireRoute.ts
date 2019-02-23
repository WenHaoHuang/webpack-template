/**
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-29 20:25:25
 * @Description: 市政消火栓 router
 */
const routes = [
  {
    name: 'rootFire',
    path: '/fire',
    component: () => import('views/Layout/Layout.vue'),
    meta: {
      title: '市政消火栓',
      icon: 'fire-extinguisher'
    },
    children: [
      {
        name: 'fireManage',
        path: '/fire/manage',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '消火栓管理'
        },
        children: [
          {
            name: 'fireManageGis',
            path: '/fire/manage/gis',
            component: () => import('views/fire/manage/gis.vue'),
            meta: {
              title: '消火栓GIS分布'
            }
          },
          {
            name: 'fireManageState',
            path: '/fire/manage/state',
            component: () => import('views/fire/manage/state/index.vue'),
            meta: {
              title: '状态信息管理'
            }
          },
          {
            name: 'fireManageMaintain',
            path: '/fire/manage/maintain',
            component: () => import('views/fire/manage/maintain/index.vue'),
            meta: {
              title: '维修保养管理'
            }
          },
          {
            name: 'fireManagePatrol',
            path: '/fire/manage/patrol',
            component: () => import('views/fire/manage/patrol/index.vue'),
            meta: {
              title: '日常巡检管理'
            }
          }
        ]
      }
    ]
  }
]

export default routes
