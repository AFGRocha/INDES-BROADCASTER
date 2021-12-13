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
            <h5 class="card-header">Local Camera</h5>
            <div class="card-body">
              <LiveCamera :width="getSmallerWidth" height="240"/>
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
              <LiveCamera :width="getSmallerWidth" height="240"/>
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
        <component :is="getLiveArea" :width="getBiggerWidth" height="540" :source="liveIPSource"></component>
      </div>
    </div>
</div>
<div class="element-preview tables-background">
  <VideoList/>
  <LocalVideoList/>
  <IPList/>
</div>
<div class="element-live tables-background">
  <button @click="changeLive('Videos')">Youtube</button>
  <button @click="changeLive('LocalVideo')">Local</button>
  <button @click="changeLive('LiveCamera')">Camera 1</button>
  <button @click="changeLive('LiveCamera')">Camera 2</button>
  <button @click="changeLive('IPCamera', $store.state.ipCamera1)">IP 1</button>
  <button @click="changeLive('IPCamera',$store.state.ipCamera2)">IP 2</button>
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
      liveIPSource: ''
    }
  },
  created () {
    this.tableWidth = (window.innerWidth / 2) / 3 + 'px'
  },
  mounted () {
    const test = document.getElementById('tables')
    console.log(test.width)
  },
  methods: {
    changeLive (component, source) {
      this.liveArea = component
      this.liveIPSource = source
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
</style>
