<template>

  <LiveCamera/>
</template>

<script>
import LiveCamera from './components/LiveCamera.vue'

export default {
  name: 'App',
  components: {
    LiveCamera
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
