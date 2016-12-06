<template>
  <!-- swiper -->
  <swiper class="swiper-content" :options="swiperOption">
    <swiper-slide v-for="item in swipeItems">
      <img :src="item.img"/>
      <p>{{item.title}}</p>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { mapGetters } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('vue-swipe/dist/vue-swipe.css')

export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: 3000,
        loop: true,
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapGetters({
      swipeItems: 'homeSwiperItems'
    })
  },
  created () {
    this.$store.dispatch('getHomeSwiperItems')
  }
}
</script>

<style lang="less" scoped>
.swiper-content {
  margin-top: 20px;
}
.swiper-inner {
  width: 100%;
  height: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  position: relative;
  background-position: center;
  background-size: cover;
  width: 90%;
  height: 200px;
  img {
    width: 100%;
    height: 200px;
  }
  p {
    position: absolute;
    bottom: 15px;
    left: 3%;
    right: 3%;
    width: 94%;
    color: #fff;
    font-size: 16px;
  }
}
</style>
