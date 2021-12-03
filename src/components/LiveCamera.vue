<template>
      <video ref="camera" :width="width" :height="height" autoplay></video>
</template>

<script>
export default {
  name: 'LiveCamera',
  props: {
    width: Number,
    height: Number
  },
  data: function () {
    return {
      isCameraOpen: true,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#'
    }
  },
  created () {
    this.createCameraElement()
  },
  methods: {
    toggleCamera () {
      if (this.isCameraOpen) {
        this.isCameraOpen = false
        this.isPhotoTaken = false
        this.isShotPhoto = false
        this.stopCameraStream()
      } else {
        this.isCameraOpen = true
        this.createCameraElement()
      }
    },

    createCameraElement () {
      this.isLoading = true

      const constraints = (window.constraints = {
        audio: false,
        video: true
      })

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false
          this.$refs.camera.srcObject = stream
        })
        .catch(() => {
          this.isLoading = false
          alert("May the browser didn't support or there is some errors.")
        })
    },

    stopCameraStream () {
      const tracks = this.$refs.camera.srcObject.getTracks()

      tracks.forEach((track) => {
        track.stop()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
