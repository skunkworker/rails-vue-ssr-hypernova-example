<template>
  <div class="todo-item">
    <p class="name">{{ name }}</p>
    <p class="due-date">{{ due_date }}</p>
  </div>
</template>

<script>
import Vue from 'vue';

import VueTimeago from 'vue-timeago'
Vue.use(VueTimeago, {
  name: "timeago",
  locale: "en"
})

export default Vue.extend({
  name: "todo-item",
  props: {
    name: {
      type: String
    },
    due_date: {
      type: String
    }
  }
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
