<template>
  <div class="header_content">
    <div v-if="selectNavIndex === 0" class="header_licon iconfont icon-home-calendar">
    </div>
    <div v-if="selectNavIndex === 0" class="header_ctitle">
      <ul>
        <li @click="navRoute($event, 'fastnews', 0)">快讯</li>
        <li @click="navRoute($event, 'home', 1)">推荐</li>
        <li @click="navRoute($event, 'earlyproject', 2)">早期项目</li>
      </ul>
      <section class="header_indicator" :style="moving" :class="{ header_indicator_left: ($route.path === '/fastnews'), header_indicator_middle: ($route.path === '/'), header_indicator_right: ($route.path === '/earlyproject')}"></section>
    </div>
    <div v-if="selectNavIndex === 0" class="header_licon iconfont icon-home-search">
    </div>
    <p v-if="selectNavIndex !== 0" class="header_title" v-text="navItems[selectNavIndex].text"></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
      moving: null
    }
  },
  computed: {
    ...mapGetters({
      selectNavIndex: 'navSelect',
      navItems: 'navItems'
    })
  },
  methods: {
    navRoute (event, name, index) {
      let x = 0
      setTimeout(() => {
        this.moving = {
          transform: `translateX(${x}px)`,
          transitionDuration: '0.5s'
        }
        this.$router.push({ name })
      }, 100)
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
.header_content {
  display: flex;
  flex: 1;
  height: 44px;
  width: 100%;
  justify-content: space-between;
  line-height: 44px;
  border-bottom: 2px solid #F2F2F2;
  .header_licon {
    flex: 0 0 60px;
    height: 44px;
    font-size: 16px;
    text-align: center;
  }
  .header_title {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  .header_ctitle {
    position: relative;
    width: 200px;
    >ul {
      display: flex;
      flex: 1;
      justify-content: space-around;
      margin: 0;
      padding: 0;
      li {
        font-size: 16px;
        color: #898989;
        list-style: none;
        text-decoration: none;
      }
      a {
        padding: 0;
        margin: 0;
        display: inline-block;
      }
    }
    .header_indicator {
      position: absolute;
      z-index: 10;
      // left: 73px; //18 73 145
      bottom: 0;
      width: 20px;
      height: 2px;
      background: #000;
    }
    .header_indicator_left {
      left: 18px;
    }
    .header_indicator_middle {
      left: 74px;
    }
    .header_indicator_right {
      left: 145px;
    }
  }
}
</style>
