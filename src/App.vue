<template>
<div class="element-preview">
    <div class="container">
      <div class="table-row">
      <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">{{ $store.state.componentList[0].name }} <button v-if="$store.state.componentList[0].name ==='Local Camera 1' || $store.state.componentList[0].name ==='Local Camera 2' " class="inlineButtons" @click="selectGear($store.state.componentList[0].name)" data-bs-toggle="modal" data-bs-target="#cameraModal"><img width="20" :src="gear"></button></h5>
            <div class="card-body">
              <component :is="$store.state.componentList[0].component" :width="getSmallerWidth" height="240" :type="$store.state.componentList[0].name" :key="$store.state.componentKey"></component>
            </div>
          </div>
        </div>
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">{{ $store.state.componentList[1].name }} <button v-if="$store.state.componentList[1].name ==='Local Camera 1' || $store.state.componentList[1].name ==='Local Camera 2' " class="inlineButtons" @click="selectGear($store.state.componentList[1].name)" data-bs-toggle="modal" data-bs-target="#cameraModal"><img width="20" :src="gear"></button></h5>
            <div class="card-body">
              <component :is="$store.state.componentList[1].component" :width="getSmallerWidth" height="240" :type="$store.state.componentList[1].name" :key="$store.state.componentKey"></component>
              <!-- <LiveCamera :width="getSmallerWidth" height="240" :id="localCamera1" :key="localCamera1"/> -->
            </div>
          </div>
        </div>
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">{{ $store.state.componentList[2].name }} <button v-if="$store.state.componentList[2].name ==='Local Camera 1' || $store.state.componentList[2].name ==='Local Camera 2' " class="inlineButtons" @click="selectGear($store.state.componentList[2].name)" data-bs-toggle="modal" data-bs-target="#cameraModal"><img width="20" :src="gear"></button></h5>
            <div class="card-body">
              <component :is="$store.state.componentList[2].component" :width="getSmallerWidth" height="240" :type="$store.state.componentList[2].name" :key="$store.state.componentKey"></component>
              <!-- <IPCamera :width="getSmallerWidth" height="240" :source="$store.state.ipCamera1"/> -->
            </div>
          </div>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">{{ $store.state.componentList[3].name }} <button v-if="$store.state.componentList[3].name ==='Local Camera 1' || $store.state.componentList[3].name ==='Local Camera 2' " class="inlineButtons" @click="selectGear($store.state.componentList[3].name)" data-bs-toggle="modal" data-bs-target="#cameraModal"><img width="20" :src="gear"></button></h5>
            <div class="card-body">
              <component :is="$store.state.componentList[3].component" :width="getSmallerWidth" height="240" :type="$store.state.componentList[3].name" :key="$store.state.componentKey"></component>
              <!-- <LocalVideo :width="getSmallerWidth" height="240"/> -->
            </div>
          </div>
        </div>
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">{{ $store.state.componentList[4].name }} <button v-if="$store.state.componentList[4].name ==='Local Camera 1' || $store.state.componentList[4].name ==='Local Camera 2' " class="inlineButtons" @click="selectGear($store.state.componentList[4].name)" data-bs-toggle="modal" data-bs-target="#cameraModal"><img width="20" :src="gear"></button></h5>
            <div class="card-body">
              <component :is="$store.state.componentList[4].component" :width="getSmallerWidth" height="240" :type="$store.state.componentList[4].name" :key="$store.state.componentKey"></component>

              <!-- <LiveCamera :width="getSmallerWidth" height="240" :id="localCamera2" :key="localCamera2"/> -->
            </div>
          </div>
        </div>
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">{{ $store.state.componentList[5].name }} <button v-if="$store.state.componentList[5].name ==='Local Camera 1' || $store.state.componentList[5].name ==='Local Camera 2' " class="inlineButtons" @click="selectGear($store.state.componentList[5].name)" data-bs-toggle="modal" data-bs-target="#cameraModal"><img width="20" :src="gear"></button></h5>
            <div class="card-body">
              <component :is="$store.state.componentList[5].component" :width="getSmallerWidth" height="240" :type="$store.state.componentList[5].name" :key="$store.state.componentKey"></component>

              <!-- <IPCamera :width="getSmallerWidth" height="240" :source="$store.state.ipCamera2"/> -->
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
<div class="element-live">
    <div class="card rounded-0">
      <h5 class="card-header">Live Area</h5>
      <div class="card-body live-area-card ">
        <img v-show="isLogo" class="logoImg" :src="ippLogo">
        <component ref="live" :is="getLiveArea" :width="getBiggerWidth" height="540" :source="liveIPSource" :id="liveCamera" :key="$store.state.liveCamera" type="Live"></component>
        <div class="spacing"/>
      </div>
    </div>
</div>
<div class="element-lists tables-background">
  <VideoList/>
  <LocalVideoList/>
  <IPList/>
  <PlaylistList/>
</div>
<div class="element-buttons tables-background">
  <div>
    <center>
    <button class="switchButton" @click="changeLive($event, 'Videos')">Youtube</button>
    <button ref="camera1Button" class="switchButton selectedButton" @click="changeLive($event, 'LiveCamera')">Camera 1</button>
    <button class="switchButton" @click="changeLive($event, 'IPCamera', $store.state.ipCamera1)">IP Cam 1</button>
    </center>
  </div>

  <div>
    <center>
    <button class="switchButton" @click="changeLive($event, 'LocalVideo')">Local</button>
    <button class="switchButton" @click="changeLive($event, 'LiveCamera')">Camera 2</button>
    <button class="switchButton" @click="changeLive($event, 'IPCamera',$store.state.ipCamera2)">IP Cam 2</button>
    </center>
  </div>
  <div>
    <center>
     <button class="switchButton medium" @click="showLogo($event)">Stream Broadcast</button>
          <button class="switchButton medium" @click="startButton">Record Broadcast</button>
       <a v-show="false" id="downloadButton" class="button">
        Download
      </a>
    </center>
  </div>
    <div>
    <center>
     <button class="switchButton large" @click="startPlaylist">Play playlist</button>
    </center>
    <center>
    <button class="switchButton large lastButton" data-bs-toggle="modal" data-bs-target="#layoutModal">Edit Layout</button>
    </center>
  </div>
</div>

  <!-- Modal -->
<div class="modal fade" id="cameraModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Change Camera</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <select v-model="selectedCam[selectedGear]" class="form-select" aria-label="Default select example">
          <option v-for="camera in availableCameras" :key="camera.id" :value="camera.id">{{ camera.name}}</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="changeCam(selectedGear,selectedCam[selectedGear])">Change Camera</button>
      </div>
    </div>
  </div>
</div>

  <!-- Modal -->
<div class="modal fade" id="layoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Layout</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <EditLayout/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LiveCamera from './components/LiveCamera.vue'
import Videos from './components/Videos.vue' // <IPCamera :width="getSmallerWidth" height="360"/>
import IPCamera from './components/IPCamera.vue'
import VideoList from './components/VideoList.vue'
import LocalVideoList from './components/LocalVideoList.vue'
import IPList from './components/IPList.vue'
import LocalVideo from './components/LocalVideo.vue'
import PlaylistList from './components/PlaylistList.vue'
import Playlist from './components/Playlist.vue'
import EditLayout from './components/EditLayout.vue'

export default {
  name: 'App',
  components: {
    LiveCamera,
    Videos,
    IPCamera,
    VideoList,
    LocalVideoList,
    IPList,
    LocalVideo,
    PlaylistList,
    Playlist,
    EditLayout
  },
  data: function () {
    return {
      myArray: [{ name: 'teste', id: 0 }, { name: 'teste2', id: 1 }],
      drag: false,
      tableWidth: 0,
      liveArea: 'LiveCamera',
      liveIPSource: '',
      availableCameras: [],
      localCamera1: '22887e4d026d0e60a4a60ae0ad4366128b0054185b0096214f9905d384e37835',
      localCamera2: '4c548f99f375d149a1426259a08ea3bbf1f714fa36f64c459f074c8ccbb89f9e',
      liveCamera: '',
      selectedCam: { camera1: '', camera2: '' },
      previousElement: {},
      selectedGear: '',
      gear: require('./assets/gear_white.png'),
      ippLogo: require('./assets/ipp.png'),
      isLogo: false,
      logoController: -1,
      recording: -1,
      recordedVideo: null,
      componentKey: ''
    }
  },
  created () {
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          if (device.kind === 'videoinput') {
            this.availableCameras.push({ id: device.deviceId, name: device.label })
          }
        })
      })
      .catch(function (err) {
        console.log(err.name + ': ' + err.message)
      })

    this.tableWidth = (window.innerWidth / 2) / 3 + 'px'
  },
  mounted () {
    this.previousElement = this.$refs.camera1Button
  },
  methods: {
    changeLive (e, component, source) {
      console.log(e.target.innerHTML)
      const element = e.target
      this.previousElement.classList.remove('selectedButton')
      element.classList.add('selectedButton')
      this.previousElement = element
      this.liveArea = component
      this.$store.state.liveIPCamera = source
      if (element.innerHTML === 'Camera 1') {
        this.$store.state.liveCamera = this.$store.state.localCamera1
      } else if (element.innerHTML === 'Camera 2') {
        this.$store.state.liveCamera = this.$store.state.localCamera2
      }
    },
    changeCam (camNumber, camID) {
      if (camNumber === 'camera1') {
        this.$store.state.localCamera1 = camID
        this.$store.state.componentKey = camID
      } else if (camNumber === 'camera2') {
        this.$store.state.localCamera2 = camID
        this.$store.state.componentKey = camID
      }
    },
    selectGear (gear) {
      if (gear === 'Local Camera 1') {
        this.selectedGear = 'camera1'
      } else if (gear === 'Local Camera 2') {
        this.selectedGear = 'camera2'
      }
    },
    showLogo (e) {
      this.logoController = -this.logoController
      const element = e.target

      if (this.logoController === 1) {
        element.classList.add('selectedButton')
        this.isLogo = true
      } else {
        element.classList.remove('selectedButton')
        this.isLogo = false
      }
    },
    startPlaylist () {
      this.liveArea = 'Playlist'
    },
    wait (delayInMS) {
      return new Promise(resolve => setTimeout(resolve, delayInMS))
    },
    startRecording (stream, lengthInMS) {
      const recorder = new MediaRecorder(stream)
      const data = []

      recorder.ondataavailable = event => data.push(event.data)
      recorder.start()
      console.log(recorder.state + ' for ' + (lengthInMS / 1000) + ' seconds...')

      const stopped = new Promise((resolve, reject) => {
        recorder.onstop = resolve
        recorder.onerror = event => reject(event.name)
      })

      const recorded = this.wait(lengthInMS).then(
        () => recorder.state === 'recording' && recorder.stop()
      )

      return Promise.all([
        stopped,
        recorded
      ])
        .then(() => data)
    },
    stop (stream) {
      stream.getTracks().forEach(track => track.stop())
    },
    startButton (e) {
      const downloadButton = document.getElementById('downloadButton')
      const element = e.target
      if (this.recording === -1) {
        element.classList.add('selectedButton')
        this.recording = -this.recording
        this.$refs.live.$el.captureStream = this.$refs.live.$el.captureStream || this.$refs.live.$el.mozCaptureStream
        this.startRecording(this.$refs.live.$el.captureStream(), 20000).then(recordedChunks => {
          const recordedBlob = new Blob(recordedChunks, { type: 'video/mp4' })
          this.recordedVideo = URL.createObjectURL(recordedBlob)
          var today = new Date()
          var dd = String(today.getDate()).padStart(2, '0')
          var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
          var yyyy = today.getFullYear()

          today = mm + '/' + dd + '/' + yyyy
          downloadButton.href = this.recordedVideo
          downloadButton.download = 'RecordedVideo_' + today + '.mp4'
          downloadButton.click()
        })
      } else {
        element.classList.remove('selectedButton')
        this.stop(this.$refs.live.$el.srcObject)
        this.liveCamera = '0'
      }
    }
  },
  computed: {
    // a computed getter
    getSmallerWidth: function () {
      return (window.innerWidth / 2) / 3
    },
    getBiggerWidth: function () {
      return (window.innerWidth / 2.4)
    },
    getSmallerHeight: function () {
      return (window.innerHeight / 2) / 3
    },
    getBiggerHeight: function () {
      return (window.innerHeight / 2)
    },
    getLiveArea: function () {
      return this.liveArea
    }
  }
}
</script>

<style>
body{
  background-color: rgb(76, 76, 76);
}
.element-preview{
  width: 55%;
  float: left;
}

.element-live{
  float: left;
  padding-left:18px;
}

.element-lists{
  width: 65%;
  float: left;
}

.element-buttons{
  width: 35%;
  float: left;
}
.padding-0{
  padding-right:0;

}

.container {
  display: table;
  width: 20%;
  padding-left:0px;
}

.table-row {

  display: table-row;
  height: 100px;
}
.table-cell {
  border: 0px;
  display: table-cell;
}

.tables-background {
  background-color: rgb(58, 57, 58);
}

.switchButton {
  background-color: #4c4c4c;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 10px;
  min-height: 33px;
  min-width: 150px;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.switchButton:hover {
  opacity: .75;
}
.selectedButton {
 background-color: #222 !important;
}

.large{
width: 489px;
}

.medium{
width: 234px;
}

.inlineButtons {
  background-color: inherit;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  float: right;
}

.logoImg {
  width: 20%;
  position: absolute;
  z-index: 2;
  margin-left: 550px;
  margin-top: 55px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(54, 53, 54);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.card-body{
 background-color: rgb(31, 30, 31) !important;
}

.card-header{
 background-color: rgb(70, 69, 70) !important;
 color: white;
}

.card{
 background-color: rgb(54, 53, 54) !important;
}

.lastButton {
  margin-bottom: 29px;
}
.spacing {
  padding-bottom: 21px;
}
.card-body{
  min-height: 278px;
}

.live-area-card {
  min-height: 599px;
}
</style>
