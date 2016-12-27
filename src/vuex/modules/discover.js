import {GET_DISCOVER} from '../mutation-types'

const state = {
  discoverData: []
}

const mutations = {
  [GET_DISCOVER] (state) {
    let newData = []
    let data = require('datas/discover').data
    const columns = data.columns
    const count = Math.ceil(data.columns.length / 6)
    for (let i = 0; i < count; i++) {
      newData[i] = columns.slice(i * 6, (i + 1) * 6)
    }
    data.columns = newData
    state.discoverData = data
  }
}

export default {
  state,
  mutations
}
