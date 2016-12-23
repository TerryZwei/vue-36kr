<template>
  <div>
    <swiper class="nav_swiper" :options="swiperOption">
      <swiper-slide class="header_swiper" v-for="items in eprojectItems">
        <dl class="nav_content" v-for="navItem in items">
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
    <home-list class="posts_list" getter="postsList" action="getPostsList" type="1"></home-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import homeList from 'components/home-list'

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
    swiperSlide,
    homeList
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
.nav_swiper {
  height: 200px;
}
.header_swiper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 180px;
}
.nav_content {
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
.posts_list {
  // margin-top: 10px;
}
</style>
