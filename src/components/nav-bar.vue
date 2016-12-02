<template>
  <nav>
    <dl v-for="item in navItems">
      <dt class="iconfont" :class="item.iconClass"></dt>
      <dd v-text="item.text"></dd>
    </dl>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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

<style>

</style>
