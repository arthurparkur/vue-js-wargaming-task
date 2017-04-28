import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Popup from './components/popup.vue'

Vue.use(VueRouter)

const routes = [
  { path: '', component: App },
  { path: '/', component: App },
  { path: '*', component: App },
  { path: '/popup', component: Popup }
]

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
