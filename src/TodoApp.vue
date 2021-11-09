<template>
  <div class="TodoApp">
    <MonFormulaire :tasks="tasks"></MonFormulaire>
    <MaTache v-for="task in tasks" :key="task.id" :task="task" @delete="onDelete"></MaTache>
  </div>
</template>

<script>
import MonFormulaire from './components/VForm.vue'
import MaTache from './components/VTask.vue'
export default {
  data() {
    return {
      tasks: []
    }
  },
  components: {
    MonFormulaire,
    MaTache
  },

  methods: {
    onDelete(index) {
      const id = this.tasks.findIndex((task) => task.id === index)
      this.tasks.splice(id, 1)
    }
  }
}
</script>

<style scoped>
  .TodoApp {
    /* background-color: red; */
  }
</style>