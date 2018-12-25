/**
 * 综合管理
 */
const routes = [
  {
    name: 'rootGeneral',
    path: '/general',
    redirect: '/general/message',
    component: () => import('views/Layout.vue'),
    meta: {
      title: '综合管理',
      icon: 'th-large',
      auth: true
    },
    children: [
      {
        name: 'generalMessage',
        path: '/general/message',
        redirect: '/general/message/interactive',
        component: () => import('views/Pages.vue'),
        meta: {
          title: '消息管理'
        },
        children: [
          {
            name: 'generalMessageInteractive',
            path: '/general/message/interactive',
            component: () => import('views/Demo.vue'),
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
            component: () => import('views/Demo.vue'),
            meta: {
              title: '人员信息'
            }
          }
        ]
      },
      {
        name: 'generalEvent',
        path: '/general/event',
        redirect: '/general/event/fire',
        component: () => import('views/Demo.vue'),
        meta: {
          title: '事件处理'
        },
        children: [
          {
            name: 'generalEventFire',
            path: '/general/event/fire',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '火情事件处理'
            }
          },
          {
            name: 'generalEventAlert',
            path: '/general/event/alert',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '告警事件处理'
            }
          },
          {
            name: 'generalEventPatrol',
            path: '/general/event/patrol',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '巡查事件处理'
            }
          },
          {
            name: 'generalEventLog',
            path: '/general/event/log',
            component: () => import('views/Demo.vue'),
            meta: {
              title: '历史事件处理'
            }
          }
        ]
      },
      {
        name: 'generalSituation',
        path: '/general/situation',
        redirect: '/general/situation/fire',
        component: () => import('views/Demo.vue'),
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
