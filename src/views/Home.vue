<template>
  <!-- <div class="home_content">
    <div class="home_item">
      <home-swiper></home-swiper>
      <home-list></home-list>
    </div>
    <div class="home_item">
      <home-swiper></home-swiper>
      <home-list></home-list>
    </div>
    <div class="home_item">
      <home-swiper></home-swiper>
      <home-list></home-list>
    </div>
  </div> -->
  <swiper class="home_content" :options="swiperOption">
    <swiper-slide class="home_overflow">
      <div>
        <home-list></home-list>
      </div>
    </swiper-slide>
    <swiper-slide class="home_overflow">
      <div>
        <home-swiper></home-swiper>
        <home-list></home-list>
      </div>
    </swiper-slide>
    <swiper-slide class="home_overflow">
      <div>
        <home-list></home-list>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import homeSwiper from 'components/home-swiper'
import homeList from 'components/home-list'

export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        initialSlide: 1,
        loop: false,
        autoHeight: true
      }
    }
  },
  components: {
    homeSwiper,
    homeList,
    swiper,
    swiperSlide
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.home_content {
  // transform: translateX(100%);
  // display: flex;
  // width: 300%;
  margin-bottom: 60px;
  overflow: hidden;
}
.home_item {
  overflow-y: scroll;
}
</style>
