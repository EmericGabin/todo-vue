<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <input
        class="todo__input todo__input--title"
        name="title"
        type="text"
        placeholder="Titre"
        required
        v-model="form.title"
      />
      
      <input class="todo__input todo__input--place" name="place" type="text" placeholder="Lieu" v-model="form.place" />

      <input class="todo__input todo__input--time" name="time" type="time" placeholder="Heure" v-model="form.time"/>

      <textarea
        class="todo__input todo__input--description"
        name="description"
        type="text"
        placeholder="Description"
        v-model="form.description"
      ></textarea>

      <button type="submit">Valider</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  data() {
    return {
      id: 0,
      form: {
        title: null,
        place: null,
        time: null,
        description: null,
        priority: null
      },
    }
  },

  mounted() {
    console.log(this.tasks)
  },

  methods: {
    onSubmit(event) {
      const task = {
        ...this.form,
        id: this.id
      }
      this.tasks.push(task)

      this.id++
    }
  }
}
</script>