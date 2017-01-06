<template>
  <nav class="footer_nav" v-show="($route.path.indexOf('articleview') <= 0)">
    <dl v-for="(item, index) in navItems" @click="jump(index)">
      <router-link :to="item.path[0]" :class="{nav_color: (item.path.indexOf($route.path) > -1)}">
        <dt class="iconfont" :class="item.iconClass"></dt>
        <dd v-text="item.text"></dd>
      </router-link>
    </dl>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navBar',
  data () {
    return {
    }
  },
  methods: {
    // 点击跳转的时候用vuex管理选中状态
    jump (index) {
      this.$store.commit('SET_NAVINDEX', {index: index})
    }
  },
  computed: {
    ...mapGetters({
      navItems: 'navItems'
    })
  },
  created () {
    this.$store.dispatch('getNavItems')
    // 初始化获取当前的路由，确定当前的是哪个导航按钮
    let sIndex = 0
    const routerPath = window.location.pathname
    switch (routerPath) {
      case '/':
      case '/fastnews':
      case '/earlyproject':
        sIndex = 0
        break
      case '/found':
        sIndex = 1
        break
      case '/focus':
        sIndex = 2
        break
      case '/me':
        sIndex = 3
        break
      default:
        sIndex = 0
    }
    this.$store.commit('SET_NAVINDEX', {index: sIndex})
  }
}
</script>

<style lang="less" scoped>
.footer_nav {
  display: flex;
  height: 60px;
  border-top: 1px solid #F8F8F8;
  >dl {
    flex: 1;
    text-align: center;
    margin: 12px 0 0 0;
    color: #C2CED8;
    a{
      color: #C2CED8;
    }
    dt {
      font-size: 26px;
      font-weight: bold;
      //#3C83EF
    }
    dd {
      margin: 0;
      padding: 2px 0 0 0;
      font-size: 11px;
    }
  }
  .nav_color {
    color: #3C83EF;
  }
}
</style>
