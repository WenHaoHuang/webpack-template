/*
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-27 20:31:31
 * @Description: 微型消防站 router
 */
const routes = [
  {
    name: 'rootMiniSite',
    path: '/minisite',
    component: () => import('views/Layout/Layout.vue'),
    meta: {
      title: '微型消防站',
      icon: 'ioxhost'
    },
    children: [
      {
        name: 'minisiteMessage',
        path: '/minisite/message',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '信息管理'
        },
        children: [
          {
            name: 'minisiteMessageGis',
            path: '/minisite/message/gis',
            component: () => import('views/minisite/message/gis.vue'),
            meta: {
              title: '消防站GIS分布'
            }
          },
          {
            name: 'minisiteMsgManage',
            path: '/minisite/message/manage',
            component: () => import('views/minisite/message/manage/index.vue'),
            meta: {
              title: '基础信息管理'
            }
          },
          {
            name: 'minisitePrevention',
            path: '/minisite/message/prevention',
            component: () => import('views/minisite/message/prevention.vue'),
            meta: {
              title: '消防站审批'
            }
          }
        ]
      },
      {
        name: 'minisiteDuty',
        path: '/minisite/duty',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '值守管理'
        },
        children: [
          {
            name: 'minisiteDutyStaff',
            path: '/minisite/duty/staff',
            component: () => import('views/minisite/duty/staff.vue'),
            meta: {
              title: '人员信息'
            }
          },
          {
            name: 'minisiteDutyTotal',
            path: '/minisite/duty/total',
            component: () => import('views/minisite/duty/total.vue'),
            meta: {
              title: '考勤统计'
            }
          }
        ]
      },
      {
        name: 'minisiteEquipment',
        path: '/minisite/equipment',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '装备管理'
        },
        children: [
          {
            name: 'minisiteEquipmentList',
            path: '/minisite/equipment/list',
            component: () => import('views/minisite/equipment/list.vue'),
            meta: {
              title: '装备详情'
            }
          },
          {
            name: 'minisiteEquipmentLog',
            path: '/minisite/equipment/log',
            component: () => import('views/minisite/equipment/log.vue'),
            meta: {
              title: '装备操作记录'
            }
          }
        ]
      },
      {
        name: 'minisiteForce',
        path: '/minisite/force',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '联勤管理'
        },
        children: [
          {
            name: 'minisiteForceFire',
            path: '/minisite/force/fire',
            component: () => import('views/minisite/force/fire.vue'),
            meta: {
              title: '警情记录'
            }
          },
          {
            name: 'minisiteForcePlan',
            path: '/minisite/force/plan',
            component: () => import('views/minisite/force/plan.vue'),
            meta: {
              title: '预案查看'
            }
          },
          {
            name: 'minisiteForcePractice',
            path: '/minisite/force/practice',
            component: () => import('views/minisite/force/practice.vue'),
            meta: {
              title: '实战训练'
            }
          },
          {
            name: 'minisiteForceInspect',
            path: '/minisite/force/inspect',
            component: () => import('views/minisite/force/inspect.vue'),
            meta: {
              title: '巡查状况'
            }
          },
          {
            name: 'minisiteForceMeeting',
            path: '/minisite/force/meeting',
            component: () => import('views/minisite/force/meeting.vue'),
            meta: {
              title: '会议记录'
            }
          },
          {
            name: 'minisiteForcePropaganda',
            path: '/minisite/force/propaganda',
            component: () => import('views/minisite/force/propaganda/index.vue'),
            meta: {
              title: '宣传活动'
            }
          }
        ]
      },
      {
        name: 'minisiteSupervisor',
        path: '/minisite/supervisor',
        component: () => import('views/Layout/Pages.vue'),
        meta: {
          title: '督导管理'
        },
        children: [
          {
            name: 'minisiteSupervisorDuty',
            path: '/minisite/supervisor/duty',
            component: () => import('views/minisite/supervisor/duty.vue'),
            meta: {
              title: '值守异常督导'
            }
          },
          {
            name: 'minisiteSupervisorForce',
            path: '/minisite/supervisor/force',
            component: () => import('views/minisite/supervisor/force.vue'),
            meta: {
              title: '联勤异常督导'
            }
          },
          {
            name: 'minisiteSupervisorInspect',
            path: '/minisite/supervisor/inspect',
            component: () => import('views/minisite/supervisor/inspect.vue'),
            meta: {
              title: '巡查异常督导'
            }
          },
          {
            name: 'minisiteSupervisorEquip',
            path: '/minisite/supervisor/equip',
            component: () => import('views/minisite/supervisor/equip.vue'),
            meta: {
              title: '装备异常督导'
            }
          }
        ]
      }
      // todo 暂缓 培训管理
      // ,{
      //   name: 'minisiteTrain',
      //   path: '/minisite/train',
      //   component: () => import('views/Layout/Pages.vue'),
      //   meta: {
      //     title: '培训管理'
      //   },
      //   children: [
      //     {
      //       name: 'minisiteTrainMember',
      //       path: '/minisite/train/fire',
      //       component: () => import('views/Demo.vue'),
      //       meta: {
      //         title: '培训科目管理'
      //       }
      //     },
      //     {
      //       name: 'minisiteTrainTotal',
      //       path: '/minisite/train/total',
      //       component: () => import('views/Demo.vue'),
      //       meta: {
      //         title: '培训计划管理'
      //       }
      //     }
      //   ]
      // },
      // todo 暂缓 数据分析
      // {
      //   name: 'minisiteAnalysis',
      //   path: '/minisite/analysis',
      //   component: () => import('views/Layout/Pages.vue'),
      //   meta: {
      //     title: '数据分析'
      //   },
      //   children: [
      //     {
      //       name: 'minisiteAnalysisMember',
      //       path: '/minisite/analysis/fire',
      //       component: () => import('views/Demo.vue'),
      //       meta: {
      //         title: '人员数据分析'
      //       }
      //     },
      //     {
      //       name: 'minisiteAnalysisTotal',
      //       path: '/minisite/analysis/total',
      //       component: () => import('views/Demo.vue'),
      //       meta: {
      //         title: '装备数据分析'
      //       }
      //     },
      //     {
      //       name: 'minisiteAnalysisTotal1',
      //       path: '/minisite/analysis/total1',
      //       component: () => import('views/Demo.vue'),
      //       meta: {
      //         title: '训练数据分析'
      //       }
      //     },
      //     {
      //       name: 'minisiteAnalysisTotal2',
      //       path: '/minisite/analysis/total2',
      //       component: () => import('views/Demo.vue'),
      //       meta: {
      //         title: '联勤数据分析'
      //       }
      //     }
      //   ]
      // }
    ]
  }
]
export default routes
