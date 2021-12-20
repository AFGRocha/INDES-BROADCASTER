<template>
  <div class="obsList">
      <div class="tableTitle"> Playlist </div>
    <draggable class="scroll" :list="list" @change="updateList">
      <div
        class="m-1 rounded-md whiteText"
        v-for="element in list"
        :key="element.name"
      >
       {{ element.name }}

      <button class="inlineButtons" @click="removeVideo (element.id)"><img width="20" :src="removeIMG"></button>
      </div>
    </draggable>
    <div class="add">
      <button class="addButton" data-bs-toggle="modal" data-bs-target="#playlistModal">+</button>
   </div>
  </div>

  <!-- Modal -->
<div class="modal fade" id="playlistModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Video</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <select   v-model="selectedVideo" class="form-select" aria-label="Default select example">
          <option v-for="video in $store.state.availableVideos" :key="video.name" :value="video">{{ video.name }}</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="newVideo">Add Video</button>
      </div>
    </div>
  </div>
</div>

</template>
<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
export default defineComponent({
  name: 'Playlist',
  components: {
    draggable: VueDraggableNext
  },
  data () {
    return {
      enabled: true,
      list: [
        { name: 'Globe', url: 'globe.mp4', id: 1, type: 'local' },
        { name: 'Design', url: 'design.mp4', id: 2, type: 'local' },
        { name: 'Bullshit', url: 'ilXD38KGsQ8', id: 3, type: 'youtube' },
        { name: 'Design', url: 'design.mp4', id: 4, type: 'local' }
      ],
      dragging: false,
      newName: '',
      newURL: '',
      removeIMG: require('../assets/cross.png'),
      selectedVideo: {}
    }
  },
  created () {
    this.$store.state.playlist = this.list
  },
  methods: {
    getId (url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      return (match && match[2].length === 11)
        ? match[2]
        : null
    },
    removeVideo (selecterdId) {
      const index = this.list.findIndex(x => x.id === selecterdId)
      this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)]
    },
    newVideo () {
      const lastId = Math.max.apply(Math, this.list.map(function (o) { return o.id }))
      console.log(this.selectedVideo)
      this.list.push({ name: this.selectedVideo.name, url: this.selectedVideo.url, id: lastId + 1, type: this.selectedVideo.type })
    },
    updateList () {
      this.$store.state.playlist = this.list
      console.log(this.list)
    }
  }
}) //
</script>

<style scoped>
.obsList {
    border-style: solid;
    width: 24%;
    float:left;
    background-color: rgb(31, 30, 31);
    margin-right: 5px;
    border-color: rgb(70, 69, 70);
}
.whiteText {
  color: white;
}

.addButton {
  background-color: inherit;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  cursor: pointer;
}

.inlineButtons {
  background-color: inherit;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  float: right;
}

.add{
  background-color: rgb(54, 53, 54);
}

.tableTitle {
 background-color: rgb(70, 69, 70);
 color: white;
 padding: 5px;
 text-align: center;
}

.scroll {
  overflow: scroll;
  height: 200px;
  overflow-x: hidden;
}
</style>
