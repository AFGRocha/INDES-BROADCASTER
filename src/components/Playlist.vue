<template>
<video id="playlistVideo" :width="width" :height="height" controls :onended="videoEnd" :key="counter">
  <source :src="require(`../assets/videos/${$store.state.playlist[counter].url}`)" type="video/mp4">
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
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    videoEnd () {
      this.counter++
      const mediaElem = document.getElementById('playlistVideo')
      console.log(mediaElem)
      mediaElem.play()
    }
  },
  computed: {
    video () {
      return this.$store.state.currentLocalVideo
    }
  },
  watch: {
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
