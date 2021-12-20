<template>
<div :key="counter">
<video v-if="local" id="playlistVideo" :width="width" :height="height" :onended="videoEnd" controls autoplay>
  <source :src="require(`../assets/videos/${$store.state.playlist[counter].url}`)" type="video/mp4">
  Your browser does not support HTML video.
</video>
<YoutubeVue3 v-if="youtube" ref="youtube" :videoid="$store.state.playlist[counter].url"  :width="width" :height="height"
      @ended="videoEnd" />
</div>

</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'
export default {
  name: 'LocalVideo',
  props: {
    width: Number,
    height: Number
  },
  data () {
    return {
      counter: 0,
      local: true,
      youtube: false,
      player: null
    }
  },
  components: {
    YoutubeVue3
  },
  methods: {
    videoEnd () {
      this.counter++
      if (this.$store.state.playlist[this.counter].type === 'local') {
        this.local = true
        this.youtube = false
      } else {
        this.local = false
        this.youtube = true
      }
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
