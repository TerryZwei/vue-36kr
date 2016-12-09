<template>
  <div class="fastnews_container">
    <ul>
      <li v-for="(news, index) in newsList">
        <div class="news_time">{{news.published_at.split(' ')[1].substr(0,5)}}</div>
        <div class="news_content">
          <p class="news_title">{{news.title}}</p>
          <transition name="fade">
            <p class="news_details" v-show="switchObj[index]">{{news.description}}</p>
          </transition>
          <a class="news_switch" @click="switchDetail(index)" href="javascript:void(0);">展开
            <span class="iconfont icon-home-news-arrowdown"></span>
          </a>
          <a class="news_share" href="javascript:void(0);">分享</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'homefastnews',
  data () {
    return {
      switchObj: []
    }
  },
  computed: {
    ...mapGetters({
      newsList: 'fastNews'
    })
  },
  created () {
    this.$store.dispatch('getFastNews')
  },
  methods: {
    switchDetail (index) {
      this.switchObj.length = this.newsList.length

      if (this.switchObj[index]) {
        this.switchObj.splice(index, 1, !this.switchObj[index])
      } else {
        this.switchObj.splice(index, 0, !this.switchObj[index])
      }
    }
  }
}
</script>

<style scoped lang="less">
.fastnews_container {
  width: 100%;
  height: auto;
  ul {
    li {
      width: 80%;
      margin: 20px 10% 0;
      list-style: none;
      overflow: hidden;
    }
  }
}
.news_time {
  float: left;
  width: 20%;
  font-size: 12px;
  padding-top: 6px;
  color: #C2CED8;
}
.news_content {
  float: left;
  padding-bottom: 10px;
  width: 80%;
  border-bottom: 1px solid #F4F4F4;
}
.news_title {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #122437;
  word-break: break-all;
}
.news_details {
  font-size: 14px;
  line-height: 18px;
}

a {
  font-size: 14px;
  color: #C2CED8;
}
.news_switch, .news_share {
  display: inline-block;
  padding-top: 10px;
}
</style>
