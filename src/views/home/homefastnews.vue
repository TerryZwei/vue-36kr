<template>
  <div class="fastnews_container">
    <ul>
      <li v-for="(news, index) in newsList" @click="showAnimate()">
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
    <transition name="fade">
      <div class="an_mask" v-show="maskShow">
      </div>
    </transition>
    <transition name="bounce">
      <div v-show="maskShow" class="an_p"></div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'homefastnews',
  data () {
    return {
      switchObj: [],
      maskShow: false
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
    },
    showAnimate () {
      this.maskShow = true
      setTimeout(() => {
        this.$router.push({path: '/testview'})
        this.maskShow = false
      }, 500)
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
.an_mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.an_p{
  position: fixed;
  left: 0;
  top: 0;
  margin-top: -25px;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9999;
}
.bounce-enter-active {
  animation: bounce-in .6s;
}
.bounce-leave-active {
}
@keyframes bounce-in {
  0% {
    top: 50%;
    height: 50px;
  }
  20% {
    top: 50%;
    height: 50px;
  }
  100% {
    top: 0;
    height: 100%;
  }
}


</style>
