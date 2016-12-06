import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import base from './modules/base'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    base,
    home
  }
})
