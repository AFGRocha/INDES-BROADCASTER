<template>
  <div class="teste">
    <Videos/>
    <LiveCamera/>
    <IPCamera/>
    <LiveArea/>
  </div>
</template>

<script>
import LiveCamera from './components/LiveCamera.vue'
import LiveArea from './components/LiveArea.vue'
import Videos from './components/Videos.vue'
import IPCamera from './components/IPCamera.vue'

export default {
  name: 'App',
  components: {
    LiveCamera,
    LiveArea,
    Videos,
    IPCamera
  }
}
</script>

<style>
.teste{
  width: 50%;
}
</style>
