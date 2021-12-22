<template>
  <div class="">
    <draggable class="" :list="list" @change="log">
      <div
        class="listItem"
        v-for="element in list"
        :key="element.name"
      >
       {{ element.name }}

      </div>
    </draggable>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
export default defineComponent({
  name: 'EditLayout',
  components: {
    draggable: VueDraggableNext
  },
  data () {
    return {
      enabled: true,
      list: [
        { component: 'Videos', name: 'YouTube Video', id: 1 },
        { component: 'LiveCamera', name: 'Local Camera 1', id: 2 },
        { component: 'LiveCamera', name: 'IP Camera', id: 3 },
        { component: 'LiveCamera', name: 'Local Video', id: 4 },
        { component: 'LiveCamera', name: 'Local Camera 2', id: 5 },
        { component: 'LiveCamera', name: 'IP Camera 2', id: 6 }
      ],
      dragging: false
    }
  },
  methods: {
    videoToStore (id) {
      this.$store.commit('updateYoutube', id)
    }
  }
})
</script>

<style scoped>
.listItem {
    border-style: solid;
    width: 30%;
    float:left;
    margin-right: 15px;
    margin-bottom: 15px;
    border-color: rgb(70, 69, 70);
    text-align: center;
    padding: 10px;
}
.whiteText {
  color: white;
}

</style>
