import { GET_HOMESWIPERITEMS, GET_NEWSLIST, GET_FASTNEWS } from '../mutation-types'

const state = {
  homeSwiperItems: [],
  newsList: [],
  fastNews: []
}

const mutations = {
  [GET_HOMESWIPERITEMS] (state) {
    state.homeSwiperItems = require('datas/focus')
  },
  [GET_NEWSLIST] (state) {
    state.newsList = require('datas/lists').data.items
  },
  [GET_FASTNEWS] (state) {
    state.fastNews = require('datas/fastnews').data.items
  }
}

export default {
  state,
  mutations
}
