<template>
  <div class="teste">
    <Videos/>
    <LiveCamera width="540" height="360"/>
    <IPCamera/>
  </div>
  <LiveCamera width="756" height="504"/>aaaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
float:left;
}
</style>
