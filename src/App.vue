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
      <div class="table-cell">
        <div class="card rounded-0">
          <h5 class="card-header">Live Area</h5>
          <div class="card-body">
             <LiveCamera :width="getBiggerWidth" height="540"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 <div>
    <!-- <VideoList/> -->
  </div>

</template>

<script>
import LiveCamera from './components/LiveCamera.vue'
import LiveArea from './components/LiveArea.vue'
import Videos from './components/Videos.vue' // <IPCamera :width="getSmallerWidth" height="360"/>
import IPCamera from './components/IPCamera.vue'
import VideoList from './components/VideoList.vue'

export default {
  name: 'App',
  components: {
    LiveCamera,
    LiveArea,
    Videos,
    IPCamera,
    VideoList
  },
  data: function () {
    return {
      myArray: [{ name: 'teste', id: 0 }, { name: 'teste2', id: 1 }],
      drag: false
    }
  },
  created () {
    console.log(window.innerWidth)
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
  background-color: #3A393A;
}
.element-preview{
  width: 50%;
  float: left;
}

.element-live{
  width: 30%;
  float: left;
}
.padding-0{
  padding-right:0;
  padding-left:0;
}

.container {
  display: table;
  width: 20%;
}

.table-row {

  display: table-row;
  height: 100px;
}
.table-cell {
  border: 0px;
  display: table-cell;
}
</style>
