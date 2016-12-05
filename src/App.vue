<template>
  <div>
    <header class="app-header" style="display:none;" v-show="appshow">
      <nav-header></nav-header>
    </header>
    <section class="app-content" style="display:none;" v-show="appshow">
      <router-view></router-view>
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
      appshow: false
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  height: 45px;
}
.app-content {
  position: relative;
  margin: 45px 0 50px 0;
}

.app-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 60px;
  z-index: 9;
}
.welcome {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url('./assets/logo.png') #fff no-repeat center center;
}
.welcome-leave-active {
  transition: opacity .5s
}
.welcome-leave-active {
  opacity: 0
}
</style>
