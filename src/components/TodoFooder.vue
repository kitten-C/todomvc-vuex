<template>
  <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{leftCont}}</strong> item left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a :class="{selected:$route.path == '/'}" href="#/">All</a>
      </li>
      <li>
        <a :class="{selected:$route.path == '/active'}" href="#/active">Active</a>
      </li>
      <li>
        <a :class="{selected:$route.path == '/completed'}" href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" v-show="isClearBtnShow" @click="clearTodo">Clear completed</button>
  </footer>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["todoList"]),
    leftCont() {
      return this.todoList.filter(v => !v.isCompleted).length;
    },
    isClearBtnShow() {
      return this.todoList.some(v => v.isCompleted);
    },
    selectedBtnCss() {
      return;
    }
  },
  methods: {
    ...mapMutations(["clearTodo"])
  }
};
</script>

