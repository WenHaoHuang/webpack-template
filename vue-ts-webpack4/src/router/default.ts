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
    component: () => import('views/index.vue'),
    meta: {
      title: '首页'
    }
  }
]

export default routes
