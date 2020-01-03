<template>
  <div class="todo-item">
    <strong>Name:</strong><p class="name">{{ name }}</p>
    <strong>Due At:</strong><p class="due-at">{{ due_at }}</p>
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
    due_at: {
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
