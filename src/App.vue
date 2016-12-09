<template>
  <div>
    <header class="app-header" style="display:none;" v-show="appshow">
      <nav-header></nav-header>
    </header>
    <section class="app-content" style="display:none;" v-show="appshow" id="content">
      <transition name='view1'>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </section>
    <footer class="app-footer" style="display:none;" v-show="appshow">
      <nav-bar></nav-bar>
    </footer>
    <!-- 欢迎页 -->
    <transition name="welcome">
      <div class="welcome"  v-show="isWelcome"></div>
    </transition>
  </div>
</template>

<script>
import navBar from 'components/nav-bar'
import navHeader from 'components/nav-header'
require('assets/css/common.less')
require('assets/css/base.less')

export default {
  name: 'app',
  data () {
    return {
      isWelcome: true,
      appshow: false,
      contentHeight: 0
    }
  },
  components: {
    navBar,
    navHeader
  },
  created () {
    this.appshow = true
    setTimeout(() => {
      this.isWelcome = false
    }, 1500)
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  height: 45px;
  background: #fff;
}
.app-content {
  position: relative;
  margin: 45px 0 60px 0;
}

.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 60px;
  z-index: 9;
  background: #fff;
}
.welcome {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: url('./assets/logo.png') #fff no-repeat center center;
}
.welcome-leave-active {
  transition: opacity .5s
}
.welcome-leave-active {
  opacity: 0
}
.view1-enter-active {
  transition: opacity .2s
}
.view1-enter{
  opacity: 0
}
</style>
