<template>
  <img id="browser_video" class="video-image" alt="video" :width="width" :height="height" src="https://sm.ign.com/t/ign_pt/news/s/smash-bros/smash-bros-ultimates-final-dlc-character-is-sora-from-kingdo_s3s7.1200.jpg">
</template>

<script>
export default {
  name: 'IPCamera', // https://192.168.1.72:8080/video
  props: {
    width: Number,
    height: Number
  }
}
</script>

<style>

</style>
