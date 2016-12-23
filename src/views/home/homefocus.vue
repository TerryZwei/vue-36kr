<template>
  <div>
    <home-swiper></home-swiper>
    <home-list action="getNewsList" getter="newsList" type="2"></home-list>
  </div>
</template>

<script>
import homeSwiper from 'components/home-swiper'
import homeList from 'components/home-list'

export default {
  name: 'homefoucus',
  components: {
    homeSwiper,
    homeList
  }
}
</script>
