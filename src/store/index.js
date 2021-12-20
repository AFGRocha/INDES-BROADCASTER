import { createStore } from 'vuex'

export default createStore({
  state: {
    currentYoutube: 'ilXD38KGsQ8',
    ipCamera1: 'https://192.168.1.76:8080/video',
    ipCamera2: 'http://185.10.80.33:8082/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER',
    currentLocalVideo: 'mov_bbb.mp4',
    playlist: {}
  },
  mutations: {
    updateYoutube (state, video) {
      state.currentYoutube = video
    },
    updateLocalVideo (state, video) {
      state.currentLocalVideo = video
    },
    updateIP1 (state, camera) {
      state.ipCamera1 = camera
    },
    updateIP2 (state, camera) {
      state.ipCamera2 = camera
    }
  },
  actions: {
  },
  modules: {
  }
})
