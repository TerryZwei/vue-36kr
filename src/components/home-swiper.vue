<template>
  <!-- swiper -->
  <div @click="showAnimate()">
    <swiper class="swiper-content" :options="swiperOption">
      <swiper-slide v-for="item in swipeItems">
        <img :src="item.img"/>
        <p>{{item.title}}</p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <common-jumppage :mask-switch="maskShow"></common-jumppage>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import commonJumppage from 'components/common-jumppage'

export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        initialSlide: 1,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      },
      maskShow: false
    }
  },
  components: {
    swiper,
    swiperSlide,
    commonJumppage
  },
  computed: {
    ...mapGetters({
      swipeItems: 'homeSwiperItems'
    })
  },
  created () {
    this.$store.dispatch('getHomeSwiperItems')
  },
  methods: {
    showAnimate () {
      this.maskShow = true
      setTimeout(() => {
        this.$router.push({path: '/articleview'})
        this.maskShow = false
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-content {
  margin-top: 20px;
}
.swiper-inner {
  width: 90%;
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
