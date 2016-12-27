<template>
  <div class="special_container">
    <ul>
      <li class="special_content" v-for="item in specialData">
        <img :src="item.cover">
        <div class="special_des">
          <p class="special_title" v-text="item.title"></p>
          <p class="special_time">{{item.published_at | caculateTime}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'found-special',
  props: ['specialData']
}
</script>

<style scoped lang="less">
.special_container {
  width: 100%;
  height: 180px;
  overflow: hidden;
  overflow-x: scroll;
  ul {
    width: 1620px;
    height: 180px;
  }
  .special_content {
    float: left;
    position: relative;
    padding-left: 20px;
    width: 300px;
    height: 180px;
    list-style: none;
    img {
      width: 100%;
      height: 180px;
    }
  }
  .special_des {
    position: absolute;
    top: 110px;
    left: 40px;
    color: #fff;
  }
  .special_title {
    font-size: 18px;
  }
  .special_time {
    padding-top: 5px;
    font-size: 14px;
  }
}

</style>
