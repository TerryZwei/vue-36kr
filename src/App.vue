<template>
  <div>
    <header class="app-header" style="display:none;" v-show="appshow">

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
    navBar
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
