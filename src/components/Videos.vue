<template>
<iframe :width="width" :height="height" :src="'https://www.youtube.com/embed/' + $store.state.currentYoutube " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
  name: 'Videos',
  props: {
    width: Number,
    height: Number
  }

}
</script>

<style>

</style>
