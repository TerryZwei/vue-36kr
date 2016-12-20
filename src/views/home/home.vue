<template>
  <div class="home_content">
    <keep-alive>
      <router-view keep-alive></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.home_content {
  width: 100%;
  margin-bottom: 60px;
  overflow: hidden;
}
.home_item {
}
</style>
