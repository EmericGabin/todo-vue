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

  mounted() {
    const tasks = localStorage.getItem('todo')
    if (tasks) {
      this.tasks = JSON.parse(tasks)
      //console.log(this.tasks)
    }
  },

  watch: {
    tasks: {
      handler: (val, oldVal) => {
        localStorage.setItem('todo', JSON.stringify(val))
      },
      deep: true
    }
  },

  methods: {
    onDelete(index) {
      const id = this.tasks.findIndex((task) => task.id === index)
      this.tasks.splice(id, 1)
    },

    toggleForm(event, value) {
      if (value !== undefined) {
        this.showForm = value
        //console.log(this.showForm)
      } else {
        this.showForm = !this.showForm
        //console.log(this.showForm)
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


.list-enter-active {
  transition: all 1s;
  /* transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1); */
}

.list-leave-active {
  transition: all 1s;
}
.list-enter /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
</style>