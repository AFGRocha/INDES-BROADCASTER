<template>
  <div class="obsList">
      <div class="tableTitle"> Local Videos </div>
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
      <button class="addButton" data-bs-toggle="modal" data-bs-target="#localvidModal">+</button>
   </div>
  </div>

  <!-- Modal -->
<div class="modal fade" id="localvidModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Video</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label class="col-form-label">Name:</label>
        <input type="text" class="form-control" v-model="newName" >
        <br>
         <input type="file" ref="doc" @change="readFile()" />
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
        { name: 'Globe', url: 'globe.mp4', id: 1 },
        { name: 'Design', url: 'design.mp4', id: 2 }
      ],
      dragging: false,
      newName: '',
      changeIMG: require('../assets/changes.png'),
      removeIMG: require('../assets/cross.png'),
      file: null,
      content: null
    }
  },
  methods: {
    videoToStore (id) {
      this.$store.commit('updateLocalVideo', id)
    },
    removeVideo (selecterdId) {
      const index = this.list.findIndex(x => x.id === selecterdId)
      this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)]
    },
    newVideo () {
      const lastId = Math.max.apply(Math, this.list.map(function (o) { return o.id }))
      this.list.push({ name: this.newName, url: this.file.name, id: lastId + 1 })
      this.$store.commit('newAvailableVideo', { name: this.newName, url: this.file.name, type: 'local' })
      this.newName = ''
      this.file = null
    },
    readFile () {
      this.file = this.$refs.doc.files[0]
      console.log(this.file)
      const reader = new FileReader()
      this.content = 'check the console for file output'
      reader.onload = (res) => {
        console.log(res.target.result)
      }
      reader.onerror = (err) => console.log(err)
      reader.readAsText(this.file)
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
