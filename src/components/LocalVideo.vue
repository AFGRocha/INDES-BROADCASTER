<template>
<video id="teste" :width="width" :height="height" controls>
  <source :src="require(`../assets/videos/${video}`)" type="video/mp4">
  Your browser does not support HTML video.
</video>

</template>

<script>

export default {
  name: 'LocalVideo',
  props: {
    width: Number,
    height: Number
  },
  computed: {
    video () {
      return this.$store.state.currentLocalVideo
    }
  },
  watch: {
    // whenever question changes, this function will run
    video: function (newVideo) {
      const mediaElem = document.getElementById('teste')
      console.log(mediaElem)
      mediaElem.load()
    }
  }
}
</script>

<style>

</style>
