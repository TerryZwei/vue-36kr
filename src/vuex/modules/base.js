import { GET_NAVITEMS } from '../mutation-types'

const state = {
  navItems: []
}

const mutations = {
  [GET_NAVITEMS] (state) {
    state.navItems = require('datas/nav-item')
  }
}

export default {
  state,
  mutations
}
