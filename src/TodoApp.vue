<template>
  <div class="TodoApp max-w-screen-xl">
    <button @click="toggleForm" class="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-gray-800 text-white text-xl z-10">{{ labelBtn }}</button>

    <transition name="fade">
      <MonFormulaire v-show="showForm" :tasks="tasks" @submit="toggleForm(null, false)"></MonFormulaire>
    </transition>

    <div class="tasks overflow-auto">
      <transition-group name="list" tag="div">
        <MaTache v-for="task in tasks" :key="task.id" :task="task" @delete="onDelete"></MaTache>
      </transition-group>
    </div>
  </div>
</template>

<script>
import MonFormulaire from './components/VForm.vue'
import MaTache from './components/VTask.vue'
export default {
  data() {
    return {
      showForm: false,
      tasks: []
    }
  },
  components: {
    MonFormulaire,
    MaTache
  },

  computed: {
    labelBtn() {
      return this.showForm ? '-' : '+'
    }
  },

  methods: {
    onDelete(index) {
      const id = this.tasks.findIndex((task) => task.id === index)
      this.tasks.splice(id, 1)
    },

    toggleForm(event, value) {
      console.log(value)
      if (value !== undefined) {
        this.showForm = value
      } else {
        this.showForm = !this.showForm
      }
    }
  }
}
</script>

<style scoped>
  .TodoApp {
    /* background-color: red; */
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>