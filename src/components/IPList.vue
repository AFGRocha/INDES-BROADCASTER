<template>
  <div class="border">
      <div class="tableTitle"> IP Cameras </div>
    <draggable class="" :list="list" @change="log">
      <div
        class="m-1 rounded-md"
        v-for="element in list"
        :key="element.name"
      >
       <p> {{ element.name }} </p>
      </div>
    </draggable>
    <div class="add">
      <button>+</button>
   </div>
  </div>

</template>
<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
export default defineComponent({
  name: 'IPList',
  components: {
    draggable: VueDraggableNext
  },
  data () {
    return {
      enabled: true,
      list: [
        { name: 'Video Title', url: 'https://www.youtube.com/embed/ilXD38KGsQ8', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 },
        { name: 'Gerard', id: 4 },
        { name: 'Gerard', id: 4 }
      ],
      dragging: false
    }
  },
  methods: {
    log (event) {
      console.log(event)
    }
  }
})
</script>

<style scoped>
.border {
    border-style: groove;
    width: 32%;
    float:left;
    background-color: rgb(31, 30, 31);
    margin-right: 5px;
}
p {
  color: white;
}

button {
  background-color: inherit;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  cursor: pointer;
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
