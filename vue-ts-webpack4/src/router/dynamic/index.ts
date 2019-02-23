/*
 * @Author: huangwenhao
 * @Date: 2019-01-04 21:58:45
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-01-27 20:30:59
 * @Description: 需权限控制路由
 */
// 指挥中心
import overview from './overview'
// 综合管理
import generalRoutes from './general'
// 微型消防站
import miniSites from './miniSite'
// 市政消火栓
import fireRoutes from './fireRoute'
// 物联网感知
import internetRoutes from './internet'
// 系统管理
import sysRoutes from './sysRoute'
// 需要权限认证的路由表
const dynamicRoutes: any = [...overview, ...generalRoutes, ...miniSites, ...fireRoutes, ...internetRoutes, ...sysRoutes]

export default dynamicRoutes
