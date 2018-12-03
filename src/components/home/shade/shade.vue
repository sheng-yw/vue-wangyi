<template>
  <div class="shade-wrap">
    <div class="close" @click="close"></div>
    <div class="modal">
      <img src="http://yanxuan.nosdn.127.net/7914b4933270885e361592cfccc93536.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      close(){
        this.$store.dispatch('closeShade');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .shade-wrap
    position: absolute
    left 0
    right 0
    top 0
    bottom 0
    z-index 100
    background rgba(0,0,0,.5)
    display flex
    align-items center
    justify-content center
    .close
      width px2rem(64)
      height  px2rem(64)
      background-image url("../../../../static/img/close.png")
      background-size 100% 100%
      background-repeat no-repeat
      position absolute
      top 1rem
      right .6rem
    .modal
      width px2rem(540)
      height px2rem(676)
      img
        width 100%
        height 100%
</style>
