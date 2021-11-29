<template>
  <img id="browser_video" class="video-image" alt="video" :width="540" :height="360" src="https://staticdelivery.nexusmods.com/mods/3729/images/993/993-1636792223-1231483487.png">
</template>

<script>
export default {
  name: "IPCamera", // https://192.168.1.72:8080/video
  props: {
    msg: String,
  },
}
</script>

<style>

</style>