<template>
  <ul>
    <li class="author_content" v-for="(author, index) in authorData">
      <div class="author_headImg">
        <img  :src="author.avatar_url"/>
        <span class="iconfont icon-discover-top10 icon-bg" :class="{color1: index===0, color2: index===1, color3: index === 2, color4: index > 2}"></span>
        <span class="icon_num" v-text="index+1"></span>
      </div>
      <div class="author_subcontent">
        <p class="author_name" v-text="author.name"></p>
        <p class="author_introduction" v-text="author.introduction"></p>
        <div class="author_article">
          <img class="author_articleImg" :src="author.posts[0].cover"/>
          <p class="author_viewCount">
            <span>{{author.posts[0].counters.view_count | toFixCount('1')}}万</span>
            <br/>
              阅读
          </p>
          <p class="author_articleTitle" v-text="author.posts[0].title"></p>
          <p class="author_bottomLine"></p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'found-auth',
  props: ['authorData']
}
</script>

<style scoped lang="less">
.author_content {
  margin: 0 auto;
  width: 90%;
  height: 150px;
  list-style: none;
  .author_headImg {
    position: relative;
    float: left;
    width: 80px;
    height: 80px;
    img {
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 50%;
    }
    .icon-bg {
      position: absolute;
      left: -5px;
      top: 45px;
      font-size: 30px;
    }
    .icon_num {
      position: absolute;
      left: 7px;
      top: 55px;
      color: #fff;
    }
  }
  .author_subcontent {
    float: right;
    width: 70%;
    .author_name {
      padding: 8px 0;
      font-size: 20px;
    }
    .author_introduction {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-line-clamp: 2;
      line-height: 20px;
      font-size: 14px;
      color: #87939E;
    }
    .author_article {
      position: relative;
      margin-top: 10px;
      height: 50px;
      background: #EFEFEF;
    }
    .author_articleImg {
      float: left;
      width: 26%;
      height: 50px;
    }
    .author_viewCount {
      position: absolute;
      left: 0;
      top: 0;
      padding-top: 10px;
      width: 26%;
      height: 40px;
      text-align: center;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);
      span {
        font-size: 14px;
        font-weight: 600;
      }
    }
    .author_articleTitle {
      float: right;
      margin: 5px;
      width: 74% - 5px;
      height: 50px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-line-clamp: 2;
      line-height: 20px;
      font-size: 14px;
    }
    .author_bottomLine {
      float: left;
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #F6F6F6;
      margin-top: 10px;
    }
  }

}
</style>
