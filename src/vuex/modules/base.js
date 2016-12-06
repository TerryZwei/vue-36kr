import { GET_NAVITEMS, GET_HOMESWIPERITEMS } from '../mutation-types'

const state = {
  navItems: [],
  homeSwiperItems: []
}

const mutations = {
  [GET_NAVITEMS] (state) {
    state.navItems = require('datas/nav-item')
  },

  [GET_HOMESWIPERITEMS] (state) {
    state.homeSwiperItems = require('datas/focus')
  }
}

export default {
  state,
  mutations
}
