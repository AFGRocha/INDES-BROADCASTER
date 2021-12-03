<template>
  <img id="browser_video" class="video-image" alt="video" :width="540" :height="360" src="http://172.18.158.238:8080/video">
</template>

<script>
export default {
  name: 'IPCamera', // https://192.168.1.72:8080/video
  props: {
    msg: String
  }
}
</script>

<style>

</style>
