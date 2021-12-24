<template :key="getIpKey">
  <img id="browser_video" class="video-image" alt="video" :width="width" :height="height" :src="source" :key="getIpKey">
</template>

<script>
export default {
  name: 'IPCamera', // https://192.168.1.76:8080/video
  props: {
    width: Number,
    height: Number,
    type: String
  },
  data: function () {
    return {
      source: ''
    }
  },
  created () {
    console.log(this.getIpKey)
    if (this.type === 'IP Camera') {
      this.source = this.$store.state.ipCamera1
    } else if (this.type === 'IP Camera 2') {
      this.source = this.$store.state.ipCamera2
    } else if (this.type === 'Live') {
      this.source = this.$store.state.liveIPCamera
    }
  },
  computed: {
    getIpKey: function () {
      console.log('entrou')
      if (this.type === 'IP Camera') {
        return this.$store.state.ipCamera1
      } else if (this.type === 'IP Camera 2') {
        return this.$store.state.ipCamera2
      } else {
        return ''
      }
    }
  }
}
</script>

<style>

</style>
