const routes: any = [
  {
    name: 'index',
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('views/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'home',
    path: '/index',
    redirect: '/system'
  }
]

export default routes
