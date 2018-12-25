const state: any = {
  info: {
    data: 'store data from user'
  },
  auth: {}
}

const mutations = {}

const getters = {
  info: (context: { state: any }) => state.info
}

export default {
  state,
  mutations,
  actions: {},
  getters
}
