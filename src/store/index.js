import { createStore } from 'vuex'

export default createStore({
  state: {
    currentYoutube: 'r5hX-NdV8Hw',
    localCamera1: '22887e4d026d0e60a4a60ae0ad4366128b0054185b0096214f9905d384e37835',
    localCamera2: '4c548f99f375d149a1426259a08ea3bbf1f714fa36f64c459f074c8ccbb89f9e',
    ipCamera1: 'http://91.133.85.170:8090/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER',
    ipCamera2: 'http://185.10.80.33:8082/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER',
    liveCamera: '',
    liveIPCamera: '',
    currentLocalVideo: 'globe.mp4',
    playlist: {},
    availableVideos: [
      { name: 'Globe', url: 'globe.mp4', type: 'local' },
      { name: 'Design', url: 'design.mp4', type: 'local' },
      { name: 'Tutorial Matricula ISEP', url: 'r5hX-NdV8Hw', type: 'youtube' },
      { name: 'Vue Crash Course 2021', url: 'qZXt1Aom3Cs', type: 'youtube' }
    ],
    componentList: [
      { component: 'Videos', name: 'YouTube Video', id: 1 },
      { component: 'LiveCamera', name: 'Local Camera 1', id: 2 },
      { component: 'IPCamera', name: 'IP Camera', id: 3 },
      { component: 'LocalVideo', name: 'Local Video', id: 4 },
      { component: 'LiveCamera', name: 'Local Camera 2', id: 5 },
      { component: 'IPCamera', name: 'IP Camera 2', id: 6 }
    ],
    componentKey: ''
  },
  mutations: {
    updateYoutube (state, video) {
      state.currentYoutube = video
    },
    updateLocalVideo (state, video) {
      state.currentLocalVideo = video
    },
    updateIP1 (state, camera) {
      state.componentKey = camera
      state.ipCamera1 = camera
    },
    updateIP2 (state, camera) {
      state.componentKey = camera
      state.ipCamera2 = camera
    },
    newAvailableVideo (state, video) {
      state.availableVideos.push(video)
    }
  },
  actions: {
  },
  modules: {
  }
})
