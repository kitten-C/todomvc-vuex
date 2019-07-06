import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: true,
  state: {
    todoList: [
      {
        id: 2,
        todo: '买了伞，千万不能把伞淋湿了藏起来',
        isCompleted: false
      },
      {
        id: 3,
        todo: '不买伞了，太贵了',
        isCompleted: false
      }
    ]
  },
  mutations: {
    toggleComletedStatus(state, id) {
      state.todoList.forEach(v => {
        if (v.id === id) {
          v.isCompleted = !v.isCompleted
        }
      })
    },
    addTodo({todoList}, inputCont) {
      if (!inputCont.trim()) return
      todoList.push({
        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 0,
        todo: inputCont,
        isCompleted: false
      })
    },
    delTodo(state, id) {
      state.todoList = state.todoList.filter(v => v.id != id)
    },
    editTodo({todoList}, {id, value}) {
      console.log(id, value)
      todoList.forEach(v => {
        if (v.id == id) {
          v.todo = value
        }
      })
    },
    clearTodo(state) {
      state.todoList = state.todoList.filter(v => !v.isCompleted)
    }
  },
  actions: {}
})
export default store
