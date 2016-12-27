<template>
  <ul class="newslist">
    <li v-for="(newItem,index) in newsList">
      <img :src="newItem.cover"/>
      <span class="iconfont icon-discover-top10 icon-bg" v-if="type === '3'" :class="{color1: index===0, color2: index===1, color3: index === 2, color4: index > 2}">
      </span>
      <span class="sort_number" v-if="type === '3'">{{index+1}}</span>
      <div class="newslist_content">
        <p class="newlist_title">{{newItem.title}}</p>
        <div class="newlist_subcontent">
          <span v-if="type === '2'">{{newItem.column.name}}</span>
          <span class="newlist_time" v-if="newItem.published_at && type !== '3'">{{newItem.published_at | caculateTime}}</span>
          <span class="newlist_collection" v-if="newItem.counters && newItem.counters.favorite > 0 && type === '2'">{{newItem.counters.favorite}}人收藏</span>
          <span v-if="newItem.counters && newItem.counters.view_count > 0 && type === '3'" class="newlist_time">{{newItem.counters.view_count | toFixCount('1')}}万阅读</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'homeList',
  data () {
    return {
      newsList: []
    }
  },
  props: ['getter', 'action', 'type', 'listData'],
  created () {
    if (this.action) {
      this.$store.dispatch(this.action)
    }
    if (this.getter) {
      this.newsList = this.$store.getters[this.getter]
    }
    if (this.listData) {
      this.newsList = this.listData
    }
  }
}
</script>

<style lang="less" scoped>
@iconSize: 28px;
.newslist {
  list-style: none;
  margin: 0 auto;
  width: 90%;
  li {
    position: relative;
    padding: 10px 0;
    height: 80px;
    border-bottom: 1px solid #F4F4F4;
    img {
      float: left;
      width: 30%;
      height: 80px;
    }
  }
  .newslist_content {
    float: left;
    width: 65%;
    margin-left: 5%;

  }
  .newlist_title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #2B3646; //#87939E
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
  }
  .newlist_subcontent {
    margin-top: 26px;
    font-size: 14px;
    color: #87939E;
  }
  .newlist_time {
    padding-left: 6px;
  }
  .newlist_collection {
    float: right;
  }
  .icon-bg {
    position: absolute;
    top: 2px;
    left: -2px;
    font-size: @iconSize;
  }
  .sort_number {
    position: absolute;
    top: 4px;
    left: -2px;
    width: @iconSize;
    height: @iconSize;
    line-height: @iconSize;
    text-align: center;
    color: #fff;
    font-size: 13px;
  }
  
  //F9A63A,FF525A,3B83F0,262A2F
}
</style>
