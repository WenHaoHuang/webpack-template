/**
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-02-11 13:42:26
 * @Description: 物联网感知 router
 */
const routes = [
  {
    name: 'rootInternet',
    path: '/internet',
    component: () => import('views/Layout/Layout.vue'),
    meta: {
      title: '物联网感知',
      icon: 'ge'
    },
    children: [
      {
        name: 'internetBase',
        path: '/internet/base',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '联网单位基本信息'
        },
        children: [
          {
            name: 'internetBaseGis',
            path: '/internet/base/gis',
            component: () => import('views/internet/base/gis.vue'),
            meta: {
              title: '联网单位GIS分布'
            }
          },
          {
            name: 'internetBaseClass',
            path: '/internet/base/class',
            component: () => import('views/internet/base/class.vue'),
            meta: {
              title: '联网单位分类统计'
            }
          },
          {
            name: 'internetBaseDetail',
            path: '/internet/base/detail',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '联网单位详情'
            }
          }
        ]
      },
      {
        name: 'internetDevice',
        path: '/internet/device',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '设施设备运行管理'
        },
        children: [
          {
            name: 'internetDeviceClass',
            path: '/internet/device/class',
            component: () => import('views/internet/device/class.vue'),
            meta: {
              title: '设施设备分类统计'
            }
          },
          // todo 暂缓 设施设备运行分析
          // {
          //   name: 'internetDeviceAnalysis',
          //   path: '/internet/device/analysis',
          //   component: () => import('views/Demo.vue'),
          //   meta: {
          //     title: '设施设备运行分析'
          //   }
          // },
          {
            name: 'internetDeviceAlarm',
            path: '/internet/device/alarm',
            component: () => import('views/internet/device/alarm/index.vue'),
            meta: {
              title: '设施设备告警统计'
            }
          },
          {
            name: 'internetDevicePatrol',
            path: '/internet/device/patrol',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '设施设备巡查统计'
            }
          },
          {
            name: 'internetDeviceMaintain',
            path: '/internet/device/maintain',
            component: () => import('views/internet/device/maintain/index.vue'),
            meta: {
              title: '维护保养检测统计'
            }
          }
        ]
      },
      {
        name: 'internetMonitor',
        path: '/internet/monitor',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '重点部位智能监控'
        },
        children: [
          {
            name: 'internetMonitorVip',
            path: '/internet/monitor/vip',
            component: () => import('views/internet/monitor/vip.vue'),
            meta: {
              title: '重点部位监控'
            }
          },
          {
            name: 'internetMonitorCctv',
            path: '/internet/monitor/cctv',
            component: () => import('views/internet/monitor/cctv.vue'),
            meta: {
              title: '摄像头管理'
            }
          }
        ]
      }
    ]
  }
]
export default routes
