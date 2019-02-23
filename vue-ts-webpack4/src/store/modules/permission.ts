/**
 * @Author: huangwenhao
 * @Date: 2018-12-26 23:25:21
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-29 17:01:06
 * @Description: 路由权限控制
 */
// 引入需验证的路由
import dynamicRouter from '@/router/dynamic'
import router from '@/router'
import { fetch } from '@/ajax'
/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */
interface ObjectItem {
  menuName?: string
}
function recursionRouter(userRouter = [], allRouter = []) {
  const realRoutes: object[] = []
  allRouter.forEach((item: any) => {
    const getItem: any = userRouter.find((v: ObjectItem) => v.menuName === item.meta.title)
    if (getItem) {
      if (item.children && item.children.length > 0) {
        item.children = recursionRouter(userRouter, item.children)
      }
      realRoutes.push(item)
    }
  })
  return realRoutes
}
// function menuMap(list: object[], parent?: string) {
//   const zIndex: string = parent || '0'
//   const menuList: any = list.filter((v: any) => v.menuParent === zIndex)
//   menuList.forEach((item: any) => {
//     item.children = menuMap(list, item.menuCode)
//   })
//   return menuList
// }
/**
 * permissionList -> 经过接口返回数据处理后的权限路由列表
 */
const state = {
  permissionList: null
}

const getters = {}
const mutations = {
  SET_PERMISSION(context: { state: any }, data: any) {
    state.permissionList = data
  }
}

const actions = {
  setMenuList(context: { commit: any }, data: any) {
    const routes = recursionRouter(data, dynamicRouter)
    context.commit('SET_MENU_LIST', routes)
  },
  async setPermissionList(context: { commit: any; state: any; getters: any }, callback: () => void) {
    await fetch({ api: 'userMenu' }, response => {
      // 获取后台返回的菜单权限组
      const permissionList = response.data
      // const menuList = menuMap(permissionList)
      // console.log(JSON.stringify(menuList))
      // 据后台权限跟定义好的权限对比，筛选出对应的路由并使用addRoutes动态添加进入路由表
      const routes: any = recursionRouter(permissionList, dynamicRouter)
      // 动态添加路由
      router.addRoutes(routes)
      // 完整的路由表
      context.commit('SET_PERMISSION', routes)
      callback()
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
