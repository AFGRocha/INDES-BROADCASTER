<template>
  <div class="border">
      <div class="tableTitle"> IP Cameras</div>
    <draggable class="" :list="list" @change="log">
      <div
        class="m-1 rounded-md whiteText"
        v-for="element in list"
        :key="element.name"
      >
       {{ element.name }}

      <button class="inlineButtons" @click="removeVideo (element.id)"><img width="20" :src="removeIMG"></button>
      <button class="inlineButtons" @click="changeIP2(element.url)"><img width="20" :src="change2IMG"></button>
      <button class="inlineButtons" @click="changeIP1(element.url)"><img width="20" :src="change1IMG"></button>
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
        <h5 class="modal-title" id="exampleModalLabel">Add IP Camera</h5>
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
        { name: 'Phone', url: 'https://192.168.1.76:8080/video', id: 1 },
        { name: 'Spain', url: 'http://185.10.80.33:8082/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 },
        { name: 'Gerard2', id: 5 },
        { name: 'Gerard3', id: 6 }
      ],
      dragging: false,
      newName: '',
      newURL: '',
      change1IMG: require('../assets/change1.png'),
      change2IMG: require('../assets/change2.png'),
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
    changeIP1 (id) {
      this.$store.commit('updateIP1', id)
    },
    changeIP2 (id) {
      this.$store.commit('updateIP2', id)
    },
    removeVideo (selecterdId) {
      const index = this.list.findIndex(x => x.id === selecterdId)
      this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)]
    },
    newVideo () {
      const lastId = Math.max.apply(Math, this.list.map(function (o) { return o.id }))
      this.list.push({ name: this.newName, url: this.getId(this.newURL), id: lastId + 1 })
      this.newName = ''
      this.newURL = ''
    }
  }
}) //
</script>

<style scoped>
.border {
    border-style: groove;
    width: 24%;
    float:left;
    background-color: rgb(31, 30, 31);
    margin-right: 5px;
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
</style>
