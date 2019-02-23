/**
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-27 22:35:22
 * @Description: 综合管理 router
 */
const routes = [
  {
    name: 'rootGeneral',
    path: '/general',
    component: () => import('views/Layout/Layout.vue'),
    meta: {
      title: '综合管理',
      icon: 'th-large'
    },
    children: [
      {
        name: 'generalMessage',
        path: '/general/message',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '消息管理'
        },
        children: [
          {
            name: 'generalMessageInteractive',
            path: '/general/message/interactive',
            component: () => import('views/general/message/interactive.vue'),
            meta: {
              title: '交互消息'
            }
          },
          {
            name: 'generalMessageNotice',
            path: '/general/message/notice',
            component: () => import('views/general/message/notice.vue'),
            meta: {
              title: '公告通知'
            }
          },
          {
            name: 'generalMessageIntormation',
            path: '/general/message/information',
            component: () => import('views/general/message/information.vue'),
            meta: {
              title: '人员信息'
            }
          }
        ]
      },
      {
        name: 'generalEvent',
        path: '/general/event',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '事件处理'
        },
        children: [
          {
            name: 'generalEventFire',
            path: '/general/event/fire',
            component: () => import('views/general/event/fire.vue'),
            meta: {
              title: '警情事件处理'
            }
          },
          {
            name: 'generalEventAlarm',
            path: '/general/event/alarm',
            component: () => import('views/general/event/alarm.vue'),
            meta: {
              title: '告警事件处理'
            }
          },
          {
            name: 'generalEventPatrol',
            path: '/general/event/patrol',
            component: () => import('views/general/event/patrol.vue'),
            meta: {
              title: '巡查事件处理'
            }
          },
          {
            name: 'generalEventLog',
            path: '/general/event/log',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '历史事件查询'
            }
          }
        ]
      },
      {
        name: 'generalSituation',
        path: '/general/situation',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '态势分析'
        },
        children: [
          {
            name: 'generalSituationFire',
            path: '/general/situation/fire',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '火情发生情况分析'
            }
          },
          {
            name: 'generalSituationRisk',
            path: '/general/situation/risk',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '火灾风险分布态势'
            }
          },
          {
            name: 'generalSituationPrevention',
            path: '/general/situation/prevention',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '火灾防范工作分析'
            }
          }
        ]
      }
    ]
  }
]
export default routes
