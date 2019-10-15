import Vue from 'vue'
import Router from 'vue-router'
import Example from './components/Example.vue'
import RoomsListLayout from './components/RoomsListLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Example
    },
    {
      path: '/rooms',
      component: RoomsListLayout
    }
  ]
})