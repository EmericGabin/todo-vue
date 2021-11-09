<template>
  <div :class="classes" @click="onClick">
    <div class="task__content">
      <h2 class="task__title">{{ task.title }} - {{ task.id }}</h2>
      <p class="task__place-time">{{ task.place }} - {{ task.time }}</p>
      <p class="task__description">{{ task.description }}</p>
    </div>
    <button class="task__delete" @click.stop="onDelete()">x</button>
  </div>
</template>

<script>
export default {
  props: ['task'],

  data() {
    return {
      currentClass: 'close',
      completed: false,
      name: 'manu',
      age: 29
    }
  },

  computed: {
    classes() {
      const c = {}
      c[`task--${this.currentClass}`] = true
      c[`age-${this.age}`] = true
      return c
    }
  },

  methods: {
    onClick() {
      this.completed = !this.completed
    },

    onDelete() {
      this.$emit('delete', this.task.id)
      // this.tasks.splice(id, 1)
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