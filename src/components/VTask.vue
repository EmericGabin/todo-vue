<template>
  <div class="task" :class="{ 'task--completed': completed }" @click="onClick">
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
  props: ['task', 'tasks'],

  data() {
    return {
      completed: false
    }
  },

  methods: {
    onClick() {
      console.log('click')
      this.completed = !this.completed
    },

    onDelete() {
      console.log('delete')
      // const id = this.id
      
      const id = this.tasks.findIndex((task) => task.id === this.task.id)
      console.log(id)
      this.tasks.splice(id, 1)
    }
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