/**
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-30 23:34:13
 * @Description: 系统管理 router
 */
const routes: any = [
  {
    name: 'rootSystem',
    path: '/system',
    component: () => import('views/Layout/Layout.vue'),
    meta: {
      title: '系统管理',
      icon: 'gears'
    },
    children: [
      {
        name: 'systemBase',
        path: '/system/base',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '基础数据管理'
        },
        children: [
          {
            name: 'systemBaseDivision',
            path: '/system/base/division',
            component: () => import('views/system/base/division/index.vue'),
            meta: {
              title: '行政区划配置'
            }
          },
          {
            name: 'systemBaseUnit',
            path: '/system/base/unit',
            component: () => import('views/system/base/unit/index.vue'),
            meta: {
              title: '单位类别管理'
            }
          },
          {
            name: 'systemBaseSubsystem',
            path: '/system/base/subsystem',
            component: () => import('views/system/base/subsystem/index.vue'),
            meta: {
              title: '子系统管理'
            }
          },
          {
            name: 'systemBaseDevice',
            path: '/system/base/device',
            component: () => import('views/system/base/device/index.vue'),
            meta: {
              title: '设备类别管理'
            }
          },
          {
            name: 'systemBaseInspect',
            path: '/system/base/inspect',
            component: () => import('views/system/base/inspect/index.vue'),
            meta: {
              title: '巡检类型管理'
            }
          }
        ]
      },
      {
        name: 'systemUser',
        path: '/system/user',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '机构用户管理'
        },
        children: [
          {
            name: 'systemUserOrg',
            path: '/system/user/org',
            component: () => import('views/system/user/org/index.vue'),
            meta: {
              title: '组织机构维护'
            }
          },
          {
            name: 'systemUserInfo',
            path: '/system/user/info',
            component: () => import('views/system/user/info/index.vue'),
            meta: {
              title: '用户信息管理'
            }
          },
          {
            name: 'systemUserLog',
            path: '/system/user/log',
            component: () => import('views/system/user/log/index.vue'),
            meta: {
              title: '用户日志审计'
            }
          }
        ]
      },
      {
        name: 'systemConfig',
        path: '/system/config',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '系统配置管理'
        },
        children: [
          {
            name: 'systemConfigMenu',
            path: '/system/config/menu',
            component: () => import('views/system/config/menu/index.vue'),
            meta: {
              title: '菜单维护'
            }
          },
          {
            name: 'systemConfigRole',
            path: '/system/config/role',
            component: () => import('views/system/config/role/index.vue'),
            meta: {
              title: '角色维护'
            }
          },
          {
            name: 'systemConfigWx',
            path: '/system/config/wx',
            component: () => import('views/system/config/wx/index.vue'),
            meta: {
              title: '微信配置'
            }
          },
          {
            name: 'systemConfigMsg',
            path: '/system/config/message',
            component: () => import('views/system/config/message/index.vue'),
            meta: {
              title: '消息推送'
            }
          }
        ]
      }
    ]
  }
]

export default routes
