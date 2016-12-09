<template>
  <nav class="footer_nav">
    <dl v-for="(item, index) in navItems">
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
  computed: {
    ...mapGetters({
      navItems: 'navItems'
    })
  },
  created () {
    this.$store.dispatch('getNavItems')
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
