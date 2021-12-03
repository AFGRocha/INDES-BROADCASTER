<template>
  <div class="teste">
    <Videos/>
      <VideoList/>
    <LiveCamera width="540" height="360"/>
    <IPCamera/>
  </div>
  <LiveCamera width="756" height="504"/>

</template>

<script>
import LiveCamera from './components/LiveCamera.vue'
import LiveArea from './components/LiveArea.vue'
import Videos from './components/Videos.vue'
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
  }
}
</script>

<style>
.teste{
width: 50%;
float:left;
}
</style>
