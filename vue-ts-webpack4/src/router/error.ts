const routes: any = [
  {
    name: 'NoFound',
    path: '/404',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]
export default routes
