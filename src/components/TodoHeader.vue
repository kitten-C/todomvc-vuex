<template>
  <header class="header">
    <h1>todos</h1>
    <input
      @keyup.enter="addTodo(inputCont)"
      class="new-todo"
      v-model="inputCont"
      placeholder="What needs to be done?"
      autofocus
    />
  </header>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      inputCont: ""
    };
  },
  methods: {
    ...mapMutations(["addTodo"])
  }
};
</script>

