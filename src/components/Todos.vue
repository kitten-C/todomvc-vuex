<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{completed:item.isCompleted,editing:item.id ==checkedId}"
        v-for="item in selectedTodoList"
        :key="item.id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" @click="toggleComletedStatus(item.id)" />
          <label @dblclick="checkedId = item.id">{{item.todo}}</label>
          <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
        <input
          class="edit"
          :value="item.todo"
          @input="editTodo({id:item.id,value:$event.target.value})"
          @keyup.enter="checkedId = -1"
        />
      </li>
    </ul>
  </section>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      checkedId: -1
    };
  },
  computed: {
    ...mapState(["todoList"]),
    selectedTodoList() {
      switch (this.$route.path.slice(1)) {
        case "active":
          return this.todoList.filter(v => !v.isCompleted);
        case "completed":
          return this.todoList.filter(v => v.isCompleted);
        default:
          return this.todoList;
      }
    }
  },
  methods: {
    ...mapMutations(["toggleComletedStatus", "delTodo", "editTodo"])
  }
};
</script>

