<template>
  <div class="TodoApp">
    <MonFormulaire :tasks="tasks"></MonFormulaire>
    <MaTache v-for="task in tasks" :key="task.id" :task="task" :tasks="tasks"></MaTache>
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
  }
}
</script>

<style scoped>
  .TodoApp {
    /* background-color: red; */
  }
</style>