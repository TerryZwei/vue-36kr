import 'lib-flexible'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import store from './vuex'
import App from './App'
import Home from './views/home'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/found',
    component: (resolve) => {
      require(['./views/found'], resolve)
    }
  },
  {
    path: '/me',
    component: (resolve) => {
      require(['./views/me'], resolve)
    }
  },
  {
    path: '/focus',
    component: (resolve) => {
      require(['./views/focus'], resolve)
    }
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
