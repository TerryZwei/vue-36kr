import { GET_HOMESWIPERITEMS, GET_NEWSLIST, GET_FASTNEWS, GET_EPROSWIPERITEMS } from '../mutation-types'

const state = {
  homeSwiperItems: [],
  newsList: [],
  fastNews: [],
  eprojectSwiperItems: []
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
  },
  [GET_EPROSWIPERITEMS] (state) {
    let newData = []
    let data = require('datas/tagmanual').data
    const arrlen = Math.ceil(data.length / 8)
    for (let i = 0; i < arrlen; i++) {
      newData.splice(i, 0, data.slice(i * 8, 8 * (i + 1)))
    }
    state.eprojectSwiperItems = newData
  }
}

export default {
  state,
  mutations
}
