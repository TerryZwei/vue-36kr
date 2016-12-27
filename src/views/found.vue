<template>
  <div>
    <p class="columns_title"><span class="iconfont icon-discover-title icon_title"></span>  精品栏目</p>
    <found-columns :columns-data="discoverList.columns"></found-columns>
    <p class="top10_title"><span class="iconfont icon-discover-title icon_title"></span>  本周Top 10</p>
    <home-list :list-data="discoverList.topNews" type="3"></home-list>
    <p class="top10_title"><span class="iconfont icon-discover-title icon_title"></span>  专题</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import foundColumns from 'components/found-columns'
import homeList from 'components/home-list'

export default {
  name: 'found',
  components: {
    foundColumns,
    homeList
  },
  computed: {
    ...mapGetters({
      discoverList: 'discoverList'
    })
  },
  created () {
    this.$store.dispatch('getDiscover')
  }
}
</script>

<style scoped lang="less">
.columns_title, .top10_title {
  padding: 20px 0 10px 7%;
  font-size: 20px;
}
.icon_title {
  color: #4286F0;
  font-size: 14px;
}
</style>
