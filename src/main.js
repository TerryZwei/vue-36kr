import 'lib-flexible'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import store from './vuex'
import filters from './filters'
import App from './App'
import Home from './views/home/home'

Vue.use(VueRouter)
Vue.use(VueResource)
filters(Vue)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        name: 'home',
        path: '',
        component: (resolve) => {
          require(['./views/home/homefocus'], resolve)
        }
      },
      {
        name: 'fastnews',
        path: 'fastnews',
        component: (resolve) => {
          require(['./views/home/homefastnews'], resolve)
        }
      },
      {
        name: 'earlyproject',
        path: 'earlyproject',
        component: (resolve) => {
          require(['./views/home/earlyproject'], resolve)
        }
      }
    ]
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
  },
  {
    path: '/testview',
    component: (resolve) => {
      require(['./views/testview'], resolve)
    }
  }
]
// 设定为history模式，切换路由时简单粗暴地将页面滚动到顶部
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
      return { x: 0, y: 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
