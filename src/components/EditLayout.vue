<template>
  <div class="">
    <draggable class="" :list="list" @change="updateList">
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
        { component: 'IPCamera', name: 'IP Camera', id: 3 },
        { component: 'LocalVideo', name: 'Local Video', id: 4 },
        { component: 'LiveCamera', name: 'Local Camera 2', id: 5 },
        { component: 'IPCamera', name: 'IP Camera 2', id: 6 }
      ],
      dragging: false
    }
  },
  methods: {
    updateList () {
      this.$store.state.componentList = this.list
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
