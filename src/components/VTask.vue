<template>
  <div class="cursor-pointer bg-gray-100 container mx-auto my-6 rounded px-6 py-4 flex justify-between items-center" :class="classes" @click="onClick">
    <div class="task__check w-8 h-8 rounded bg-gray-300 mr-10 relative">
      <div class="checked absolute w-6 h-6 rounded bg-red-400 opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" v-show="task.completed"></div>
    </div>
    <div class="task__content mr-auto">
      <h2 class="task__title font-black text-lg text-pink-600 uppercase" :class="{'line-through': task.completed}">{{ task.title }}</h2>
      <p class="task__place-time">{{ task.place }} - {{ task.time }}</p>
      <p class="task__description">{{ task.description }}</p>
    </div>
    <button class="task__delete w-10" @click.stop="onDelete()">
      <img class="w-full h-full" src="../assets/delete.svg" alt="">
    </button>
  </div>
</template>

<script>


export default {
  props: ['task'],


  data() {
    return {
      currentClass: 'close',
    }
  },

  computed: {
    classes() {
      const c = {}
      c[`task--${this.currentClass}`] = true
      c[`opacity-60`] = this.task.completed
      return c
    }
  },

  methods: {
    onClick() {
      this.task.completed = !this.task.completed
    },

    onDelete() {
      this.$emit('delete', this.task.id)
    }
  },

  // LIFE CYCLE
  created() {
    console.log('created')
  },

  mounted() {
    console.log('mounted')
  },

  updated() {
    console.log('updated')
  },

  destroyed() {
    console.log('destroy')
  }
}
</script>

<style scoped>
.task {
  margin: 12px;
}

.task.task--completed {
  opacity: 0.5;
}

.task.task--completed .task__title{
  text-decoration: line-through;
}
</style>