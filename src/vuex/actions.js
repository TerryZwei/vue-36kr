import { GET_NAVITEMS, GET_HOMESWIPERITEMS } from './mutation-types'

export default {
  getNavItems ({ commit }) {
    commit(GET_NAVITEMS)
  },
  getHomeSwiperItems ({ commit }) {
    commit(GET_HOMESWIPERITEMS)
  }
}
