import { createStore } from 'vuex'

export default createStore({
  state: {
    currentYoutube: 'ilXD38KGsQ8',
    localCamera1: '22887e4d026d0e60a4a60ae0ad4366128b0054185b0096214f9905d384e37835',
    localCamera2: '4c548f99f375d149a1426259a08ea3bbf1f714fa36f64c459f074c8ccbb89f9e',
    ipCamera1: 'https://192.168.1.77:8080/video',
    ipCamera2: 'http://185.10.80.33:8082/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER',
    liveCamera: '',
    liveIPCamera: '',
    currentLocalVideo: 'globe.mp4',
    playlist: {},
    availableVideos: [
      { name: 'Globe', url: 'globe.mp4', type: 'local' },
      { name: 'Design', url: 'design.mp4', type: 'local' },
      { name: 'Bullshit', url: 'ilXD38KGsQ8', type: 'youtube' },
      { name: 'Larry Lurr Memes', url: 'e4AYkPaRQAA', type: 'youtube' }
    ],
    componentList: [
      { component: 'Videos', name: 'YouTube Video', id: 1 },
      { component: 'LiveCamera', name: 'Local Camera 1', id: 2 },
      { component: 'IPCamera', name: 'IP Camera', id: 3 },
      { component: 'LocalVideo', name: 'Local Video', id: 4 },
      { component: 'LiveCamera', name: 'Local Camera 2', id: 5 },
      { component: 'IPCamera', name: 'IP Camera 2', id: 6 }
    ]
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
