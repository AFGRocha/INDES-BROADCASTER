<template>
      <video ref="camera" :width="width" :height="height" autoplay></video>
</template>

<script>
export default {
  name: 'LiveCamera',
  props: {
    width: Number,
    height: Number,
    type: String
  },
  data: function () {
    return {
      isCameraOpen: true,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
      id: ''
    }
  },
  created () {
    if (this.type === 'Local Camera 1') {
      this.id = this.$store.state.localCamera1
    } else if (this.type === 'Local Camera 2') {
      this.id = this.$store.state.localCamera2
    } else if (this.type === 'Live') {
      this.id = this.$store.state.liveCamera
    }
    this.createCameraElement()
  },
  beforeUnmount () {
    this.stopCameraStream()
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
        video: { deviceId: this.id }
      })
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false

          this.$refs.camera.srcObject = stream
        })
        .catch((error) => {
          this.isLoading = false
          alert(error)
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
