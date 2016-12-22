<template>
  <swiper class="nav-swiper" :options="swiperOption">
    <swiper-slide class="header_swiper" v-for="items in eprojectItems">
      <dl class="nav-content" v-for="navItem in items">
        <!-- <router-link :to="item.path[0]"> -->
          <dt class="nav_icon">
            <img :src="navItem.cover" />
          </dt>
          <dd class="nav_text" v-text="navItem.name"></dd>
        <!-- </router-link> -->
      </dl>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { mapGetters } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        initialSlide: 0,
        pagination: '.swiper-pagination'
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.$store.dispatch('getEproSwiperItems')
  },
  computed: {
    ...mapGetters({
      eprojectItems: 'eprojectSwiperItems'
    })
  }
}
</script>

<style scoped lang="less">
.nav-swiper {
  height: 160px;
}
.header_swiper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 140px;
}
.nav-content {
  margin: 0 0 0 1%;
  width: 20%;
  height: 45px;
}
.nav_icon {
  img {
    display: block;
    margin: 6px auto;
    width: 30px;
    height: 30px;
  }
}
.nav_text {
  margin: 0;
  width: 100%;
  font-size: 12px;
  text-align: center;
}
</style>
