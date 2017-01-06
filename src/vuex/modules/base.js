import { GET_NAVITEMS, SET_NAVINDEX } from '../mutation-types'

const state = {
  navItems: [],
  selectIndex: 0,
  navStatus: false
}

const mutations = {
  [GET_NAVITEMS] (state) {
    state.navItems = require('datas/nav-item')
  },
  [SET_NAVINDEX] (state, payload) {
    state.selectIndex = payload.index
  }
}

export default {
  state,
  mutations
}
