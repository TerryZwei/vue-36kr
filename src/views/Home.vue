<template>
  <div class="home_content">
    <home-swiper></home-swiper>
    <home-list></home-list>
  </div>
</template>

<script>
import homeSwiper from 'components/home-swiper'
import homeList from 'components/home-list'

export default {
  name: 'home',
  components: {
    homeSwiper,
    homeList
  },
  mounted () {
    const element = this.$el

    element.addEventListener('touchstart', (event) => {
      console.log('touchstart', event)
    })
    element.addEventListener('touchmove', (event) => {
      // console.log('touchmove', event.touches[0])
      // setTimeout(() => {
      // }, 50);
    })
    element.addEventListener('touchend', (event) => {
      console.log('touchend', event)
    })
  }
}
</script>

<style lang="less"scoped>
.home_content {
  // transform: translateX(50%);
}
</style>
