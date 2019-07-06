import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入样式
import './assets/base.css'
import './assets/index.css'
import './assets/app.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
