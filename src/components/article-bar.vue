<template>
  <ul class="articleBar_content">
    <li class="iconfont icon-article-goback" @click="goBack()"></li>
    <li v-for="classicon in barIcons" class="iconfont " :class="classicon"></li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      barIcons: ['icon-article-comment', 'icon-article-collection', 'icon-article-share', 'icon-article-more']
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
.articleBar_content {
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #F8F8F8;
  width: 100%;
  height: 60px;
  z-index: 9999;
  line-height: 60px;
  text-align: center;
  li {
    float: left;
    width: 20%;
    height: 60px;
    color: #101010;
    font-size: 20px;
    list-style: none;
  }
}
</style>
