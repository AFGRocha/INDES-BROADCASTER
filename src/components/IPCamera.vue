<template>
  <img id="browser_video" class="video-image" alt="video" :width="width" :height="height" :src="source">
</template>

<script>
export default {
  name: 'IPCamera', // https://192.168.1.76:8080/video
  props: {
    width: Number,
    height: Number,
    source: String
  }
}
</script>

<style>

</style>
