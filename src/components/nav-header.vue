<template>
  <div class="header_content">
    <div class="header_licon iconfont icon-home-calendar">
    </div>
    <div class="header_ctitle">
      <ul>
        <li @click="navRoute($event, 'fastnews', 0)">快讯</li>
        <li @click="navRoute($event, 'home', 1)">推荐</li>
        <li @click="navRoute($event, 'home', 2)">早期项目</li>
      </ul>
      <section class="header_indicator" :style="moving"></section>
    </div>
    <div class="header_licon iconfont icon-home-search">
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      moving: null
    }
  },
  methods: {
    navRoute (event, name, index) {
      let x = event.target.clientWidth * 1.7

      if (index === 0) {
        x = -event.target.clientWidth * 1.7
      } else if (index === 1) {
        x = 0
      } else if (index === 2) {
        x = event.target.clientWidth * 1.1
      }
      setTimeout(() => {
        this.moving = {
          transform: `translateX(${x}px)`,
          transitionDuration: '0.5s'
        }
        this.$router.push({ name })
      }, 100)
    }
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
      left: 73px; //18 73 145
      bottom: 0;
      width: 20px;
      height: 2px;
      background: #000;
    }
  }
}
</style>
