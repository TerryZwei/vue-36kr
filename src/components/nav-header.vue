<template>
  <div class="header_content">
    <div class="header_licon iconfont icon-home-calendar">
    </div>
    <div class="header_ctitle">
      <ul>
        <li>快讯</li>
        <li>推荐</li>
        <li>早期项目</li>
      </ul>
    </div>
    <div class="header_licon iconfont icon-home-search">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.header_content {
  display: flex;
  flex: 1;
  height: 44px;
  width: 100%;
  justify-content: space-between;
  line-height: 44px;
  border-bottom: 2px solid #F2F2F2;
  .header_licon {
    flex: 0 0 60px;
    height: 44px;
    font-size: 16px;
    text-align: center;
  }
  .header_ctitle {
    width: 200px;
    >ul {
      display: flex;
      flex: 1;
      justify-content: space-around;
      margin: 0;
      padding: 0;
      >li {
        font-size: 16px;
        color: #898989;
        list-style: none;
        text-decoration: none;
      }
    }


  }
}
</style>
