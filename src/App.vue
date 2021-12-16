<template>
<div class="element-preview">
    <div class="container">
      <div class="table-row">
      <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">YouTube Video</h5>
            <div class="card-body">
              <Videos :width="getSmallerWidth" height="240"/>
            </div>
          </div>
        </div>
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">Local Camera </h5>
             <button class="addButton" data-bs-toggle="modal" data-bs-target="#cameraModal">+</button>
            <div class="card-body">
              <LiveCamera :width="getSmallerWidth" height="240" :id="localCamera1" :key="localCamera1"/>
            </div>
          </div>
        </div>
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">IP Camera</h5>
            <div class="card-body">
              <IPCamera :width="getSmallerWidth" height="240" :source="$store.state.ipCamera1"/>
            </div>
          </div>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">Local Video</h5>
            <div class="card-body">
              <LocalVideo :width="getSmallerWidth" height="240"/>
            </div>
          </div>
        </div>
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">Local Camera 2</h5>
            <div class="card-body">
              <LiveCamera :width="getSmallerWidth" height="240" :id="localCamera2"/>
            </div>
          </div>
        </div>
        <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">IP Camera 2</h5>
            <div class="card-body">
              <IPCamera :width="getSmallerWidth" height="240" :source="$store.state.ipCamera2"/>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
<div class="element-live">
    <div class="card rounded-0">
      <h5 class="card-header">Live Area</h5>
      <div class="card-body">
        <component :is="getLiveArea" :width="getBiggerWidth" height="540" :source="liveIPSource" :id="localCamera2"></component>
      </div>
    </div>
</div>
<div class="element-preview tables-background">
  <VideoList/>
  <LocalVideoList/>
  <IPList/>
</div>
<div class="element-live tables-background">
  <div :style="{width:  getBiggerWidth + 'px' }">
    <center>
    <button class="switchButton" @click="changeLive('Videos')">Youtube</button>
    <button class="switchButton" @click="changeLive('LiveCamera')">Camera 1</button>
    <button class="switchButton" @click="changeLive('IPCamera', $store.state.ipCamera1)">IP Cam 1</button>
    </center>
  </div>

  <div>
    <center>
    <button class="switchButton" @click="changeLive('LocalVideo')">Local</button>
    <button class="switchButton" @click="changeLive('LiveCamera')">Camera 2</button>
    <button class="switchButton" @click="changeLive('IPCamera',$store.state.ipCamera2)">IP Cam 2</button>
    </center>
  </div>
  <div>
    <center>
     <button class="switchButton large" @click="changeLive('IPCamera',$store.state.ipCamera2)">Stream Broadcast</button>
    </center>
  </div>
    <div>
    <center>
     <button class="switchButton large" @click="changeLive('IPCamera',$store.state.ipCamera2)">Record Broadcast</button>
    </center>
  </div>
    <div>
    <center>
     <button class="switchButton large" @click="changeLive('IPCamera',$store.state.ipCamera2)">Play playlist</button>
    </center>
  </div>
</div>

  <!-- Modal -->
<div class="modal fade" id="cameraModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Youtube Video</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <select v-model="selectedCam" class="form-select" aria-label="Default select example">
          <option v-for="camera in availableCameras" :key="camera.id" :value="camera.id">{{ camera.name}}</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="changeCam(1,selectedCam)">Change Camera</button>
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

export default {
  name: 'App',
  components: {
    LiveCamera,
    Videos,
    IPCamera,
    VideoList,
    LocalVideoList,
    IPList,
    LocalVideo
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
      selectedCam: ''
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
    console.log(this.availableCameras)
  },
  mounted () {
    const test = document.getElementById('tables')
    console.log(test.width)
  },
  methods: {
    changeLive (component, source) {
      this.liveArea = component
      this.liveIPSource = source
    },
    changeCam (camNumber, camID) {
      if (camNumber === 1) {
        this.localCamera1 = camID
      }
      console.log(this.localCamera1)
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
  background-color: #222;
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

.switchButton:hover,
.switchButton:focus {
  opacity: .75;
}

.large{
width: 489px;
}
</style>
