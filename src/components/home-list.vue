<template>
  <ul class="newslist">
    <li v-for="newItem in newsList">
      <img :src="newItem.cover"/>
      <div class="newslist_content">
        <p class="newlist_title">{{newItem.title}}</p>
        <div class="newlist_subcontent">
          <span v-if="type === '2'">{{newItem.column.name}}</span>
          <span class="newlist_time" v-if="newItem.published_at">{{newItem.published_at | caculateTime}}</span>
          <span class="newlist_collection" v-if="newItem.counters && newItem.counters.favorite > 0 && type === '2'">{{newItem.counters.favorite}}人收藏</span>
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
  props: ['getter', 'action', 'type'],
  created () {
    this.$store.dispatch(this.action)
    this.newsList = this.$store.getters[this.getter]
  }
}
</script>

<style lang="less" scoped>
.newslist {
  list-style: none;
  margin: 0 auto;
  width: 90%;
  li {
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
}
</style>
