<template>
  <div>
    <swiper class="columns_swiper" :options="swiperOption">
      <swiper-slide class="columns_header_swiper" v-for="items in columnsData">
        <dl class="columns_nav_content" v-for="navItem in items">
            <dt class="columns_nav_icon">
              <img :src="navItem.cover" />
            </dt>
            <dd class="nav_text" v-text="navItem.introduction"></dd>
        </dl>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'found-columns',
  props: ['columnsData'],
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
  }
}
</script>

<style scoped lang="less">
.columns_swiper {
  width: 100%;
  height: 230px;
  .columns_header_swiper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 160px;
  }
  .columns_nav_content {
    width: 30%;
    height: 80px;
    img{
      display: block;
      margin: 0 auto;
      width: 90%;
      height: 60px;
    }
    dd {
      margin: 0;
      padding: 8px 0 0 0;
      font-size: 12px;
      color: #87939E;
    }
  }
}
</style>
