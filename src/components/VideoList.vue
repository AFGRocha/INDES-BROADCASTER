<template>
  <div class="obsList">
      <div class="tableTitle"> Youtube Videos </div>
    <draggable class="scroll" :list="list" @change="log">
      <div
        class="m-1 rounded-md whiteText"
        v-for="element in list"
        :key="element.name"
      >
       {{ element.name }}

      <button class="inlineButtons" @click="removeVideo (element.id)"><img width="20" :src="removeIMG"></button>
      <button class="inlineButtons" @click="videoToStore(element.url)"><img width="20" :src="changeIMG"></button>
      </div>
    </draggable>
    <div class="add">
      <button class="addButton" data-bs-toggle="modal" data-bs-target="#youtubeModal">+</button>
   </div>
  </div>

  <!-- Modal -->
<div class="modal fade" id="youtubeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Youtube Video</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label class="col-form-label">Name:</label>
        <input type="text" class="form-control" v-model="newName" >
        <label class="col-form-label">URL:</label>
        <input type="text" class="form-control" v-model="newURL" >
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
  name: 'VideoList',
  components: {
    draggable: VueDraggableNext
  },
  data () {
    return {
      enabled: true,
      list: [
        { name: 'Bullshit', url: 'ilXD38KGsQ8', id: 1 },
        { name: 'Larry Lurr Memes', url: 'e4AYkPaRQAA', id: 2 }
      ],
      dragging: false,
      newName: '',
      newURL: '',
      changeIMG: require('../assets/changes.png'),
      removeIMG: require('../assets/cross.png')
    }
  },
  methods: {
    getId (url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      return (match && match[2].length === 11)
        ? match[2]
        : null
    },
    videoToStore (id) {
      this.$store.commit('updateYoutube', id)
    },
    removeVideo (selecterdId) {
      const index = this.list.findIndex(x => x.id === selecterdId)
      this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)]
    },
    newVideo () {
      const lastId = Math.max.apply(Math, this.list.map(function (o) { return o.id }))
      this.list.push({ name: this.newName, url: this.getId(this.newURL), id: lastId + 1 })
      this.$store.commit('newAvailableVideo', { name: this.newName, url: this.getId(this.newURL), type: 'youtube' })
      this.newName = ''
      this.newURL = ''
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
