<template>
  <div id="app">
    <section class="todoapp" id="app">
      <todoheader></todoheader>
      <todos></todos>
      <todofooter></todofooter>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <!-- Remove the below line ↓ -->
      <p>
        Template by
        <a href="http://sindresorhus.com">Sindre Sorhus</a>
      </p>
      <!-- Change this out with your name and url ↓ -->
      <p>
        Created by
        <a href="http://todomvc.com">you</a>
      </p>
      <p>
        Part of
        <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  </div>
</template>

<script>
import todoheader from "./components/TodoHeader";
import todos from "./components/Todos";
import todofooter from "./components/TodoFooder";
export default {
  components: {
    todoheader,
    todos,
    todofooter
  }
};
</script>
