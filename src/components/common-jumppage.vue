<template>
  <div>
    <transition name="fade">
      <div class="an_mask" v-show="maskSwitch">
      </div>
    </transition>
    <transition name="bounce">
      <div v-show="maskSwitch" class="an_p"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'common-jumppage',
  props: ['maskSwitch']
}
</script>

<style scope lang="less">
.an_mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin-top: -44px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.an_p{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
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
