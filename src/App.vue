<template>
  <Videos/>
  <LiveCamera/>
  <img id="browser_video" class="video-image" alt="video" :width="540" :height="360" src="https://192.168.1.72:8080/video">
    <LiveArea/>
</template>

<script>
import LiveCamera from './components/LiveCamera.vue'
import LiveArea from './components/LiveArea.vue'
import Videos from './components/Videos.vue'

export default {
  name: 'App',
  components: {
    LiveCamera,
    LiveArea,
    Videos
  }
}
</script>

<style>

</style>
