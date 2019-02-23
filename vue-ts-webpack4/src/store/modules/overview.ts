/**
 * @Author: huangwenhao
 * @Date: 2019-01-26 10:35:43
 * @LastEditors: huangwenhao
 * @LastEditTime: 2019-02-23 17:38:12
 * @Description: 指挥大屏
 */
// 设置初始值为null，不创建无法监听
const state: any = {
  buildStatePush: null,
  feedbackPush: null,
  fhStatePush: null,
  fireEventPush: null,
  mfsStatePush: null
}

const mutations = {
  SET_OVERVIEW(context: { state: any }, params: any) {
    const { type, value } = params
    Object.keys(value).forEach((item: any) => {
      state[item] = value[item]
    })
  }
}

const actions = {
  setOverview(context: { commit: (type: string, data: object) => void }, params: object) {
    context.commit('SET_OVERVIEW', params)
  }
}
export default {
  state,
  mutations,
  actions
}
