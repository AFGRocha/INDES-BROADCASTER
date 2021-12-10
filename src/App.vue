<template>
<div class="element-preview">
    <div class="container">
      <div class="table-row">
      <div class="table-cell">
          <div class="card rounded-0">
            <h5 class="card-header">Video</h5>
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
              <LiveCamera :width="getSmallerWidth" height="240"/>
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
      </div>
  </div>
</div>
<div class="element-live">
  <div class="container">
    <div class="card rounded-0">
      <h5 class="card-header">Live Area</h5>
      <div class="card-body">
        <LiveCamera :width="getBiggerWidth" height="540"/>
      </div>
    </div>
  </div>
</div>
<div class="element-preview tables-background">
  <VideoList/>
  <LocalVideoList/>
  <IPList/>
</div>

</template>

<script>
import LiveCamera from './components/LiveCamera.vue'
import LiveArea from './components/LiveArea.vue'
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
    LiveArea,
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
      tableWidth: 0
    }
  },
  created () {
    this.tableWidth = (window.innerWidth / 2) / 3 + 'px'
  },
  mounted () {
    const test = document.getElementById('tables')
    console.log(test.width)
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
  padding-left:0px;
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
