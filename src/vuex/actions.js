import { GET_NAVITEMS, GET_HOMESWIPERITEMS, GET_NEWSLIST, GET_FASTNEWS, GET_EPROSWIPERITEMS, GET_POSTLIST } from './mutation-types'

export default {
  getNavItems ({ commit }) {
    commit(GET_NAVITEMS)
  },
  getHomeSwiperItems ({ commit }) {
    commit(GET_HOMESWIPERITEMS)
  },
  getNewsList ({ commit }) {
    commit(GET_NEWSLIST)
  },
  getFastNews ({ commit }) {
    commit(GET_FASTNEWS)
  },
  getEproSwiperItems ({ commit }) {
    commit(GET_EPROSWIPERITEMS)
  },
  getPostsList ({ commit }) {
    commit(GET_POSTLIST)
  }
}
