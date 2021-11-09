import Vue from 'vue'
import TodoApp from './TodoApp.vue'

new Vue({
  render: (createElement) => {
    return createElement(TodoApp)
  },

}).$mount('#todo')

