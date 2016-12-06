import { GET_HOMESWIPERITEMS, GET_NEWSLIST } from '../mutation-types'

const state = {
  homeSwiperItems: [],
  newsList: []
}

const mutations = {
  [GET_HOMESWIPERITEMS] (state) {
    state.homeSwiperItems = require('datas/focus')
  },
  [GET_NEWSLIST] (state) {
    state.newsList = require('datas/lists').data.items
  }
}

export default {
  state,
  mutations
}
