<template>
  <div class="article_content">
    <transition name="fade">
      <div v-show="articleShow">
        <div class="article_header">
          <img :src="articleData.cover" width="100%"/>
          <p class="article_title" v-text="articleData.title"></p>
        </div>
        <section class="article_sub">
          <p><span v-text="articleData.user.name"></span><span>{{articleData.published_at | caculateTime}}</span></p>
          <p v-html="articleData.summary"></p>
          <div class="article_underline"></div>
          <p v-html="articleData.content"></p>
        </section>
        <article-bar></article-bar>
      </div>
    </transition>
    <span v-show="!articleShow" class="iconfont icon-article-loading"></span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import articleBar from 'components/article-bar'
export default {
  name: 'articleview',
  data () {
    return {
      articleShow: false
    }
  },
  components: {
    articleBar
  },
  computed: {
    ...mapState({
      articleData: state => state.home.articleData
    })
  },
  created () {
  },
  activated () {
    this.articleShow = false
    setTimeout(() => {
      this.articleShow = true
    }, 500)
  }
}
</script>

<style scoped lang="less">
.article_content {
  margin-bottom: 60px;
  width: 100%;
  height: auto;
  overflow: hidden;
  background: #f9f9f9;
  section{
    margin: 0 20px;
  }
  .article_header {
    position: relative;
  }
  .icon-article-loading {
    position: fixed;
    top: 50%;
    left: 50%;
    font-size: 30px;
    font-weight: bold;
    color: #3C83EF;
    animation: circle 1s infinite linear;
  }
  @keyframes circle {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(-360deg)
    }
  }
}
.article_underline{
  margin-top: 30px;
  width: 60px;
  height: 4px;
  background: #E1E1E1;
}
.article_title {
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 10px;
  height: 80px;
  background: #fff;
  font-size: 24px;
  color: #3D3D3D;
  font-weight: 600;
  line-height: 80px;
  padding-left: 20px;
}
.article_sub {
  p {
    color: #999;
    font-size: 9px;
    line-height: 26px;
    text-align: justify;
  }
  p:nth-child(1) {
    margin-top: 70px;
    span:nth-child(2) {
      padding-left: 20px;
    }
  }
  p:nth-child(2) {
    margin-top: 30px;
  }
  p:nth-child(4) {
    margin-top: 30px;
    color: #3D3D3D;
    font-size:10px;
    line-height: 28px;
  }
}
</style>
