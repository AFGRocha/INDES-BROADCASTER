import { createStore } from 'vuex'

export default createStore({
  state: {
    currentYoutube: 'ilXD38KGsQ8'
  },
  mutations: {
    updateYoutube (state, video) {
      state.currentYoutube = video
    }
  },
  actions: {
  },
  modules: {
  }
})
