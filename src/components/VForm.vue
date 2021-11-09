<template>
  <div class="form-container absolute w-screen h-screen">
    <div class="form-container__overlay absolute w-screen h-screen bg-gray-400 bg-opacity-60"></div>
    <form class="relative flex flex-col max-w-screen-md justify-center items-center	mx-auto h-screen" ref="myForm" @submit.prevent="onSubmit">
      <input
        class="todo__input todo__input--title my-2 w-full h-14 p-4"
        name="title"
        type="text"
        placeholder="Titre"
        required
        v-model="form.title"
      />
      
      <input class="todo__input todo__input--place my-2 w-full h-14 p-4" name="place" type="text" placeholder="Lieu" v-model="form.place" />

      <input class="todo__input todo__input--time my-2 w-full h-14 p-4" name="time" type="time" placeholder="Heure" v-model="form.time"/>

      <textarea
        class="todo__input todo__input--description my-2 w-full h-14 p-4"
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
      toggle: false,
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
    console.log('mounted form')
  },

  destroyed() {
    console.log('destroy form')
  },

  methods: {
    onSubmit(event) {
      const task = {
        ...this.form,
        id: this.id
      }
      this.tasks.push(task)

      this.$emit('submit')

      //Reset le form
      Object.keys(this.form).forEach(key => {
        this.form[key] = null
      })

      this.id++
    },

    onToggle() {
      this.toggle = !this.toggle
    }
  }
}
</script>