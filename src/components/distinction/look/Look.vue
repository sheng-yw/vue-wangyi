<template>
  <div class="look-wrap">
    <h2 class="title">严选LOOK</h2>
    <a href="javascript:;">
      <img class="logo" src="https://yanxuan.nosdn.127.net/426ea284025bb222b1a3fdb11a6adb3f.jpg" alt="">
    </a>
    <div class="user">
      <img class="user-avatar" src="https://yanxuan.nosdn.127.net/069037fe8c52e14c152d85074071fe43.jpg" alt="">
      <span>a****0</span>
    </div>
    <p class="message">是我想要的风格。安装时除了有个螺丝孔有问题，后因有设备处理就很方便的解决问题了。大家看到都觉得很会买东西😀，希望严选多提供这类有品味的产品。</p>
  </div>
</template>

<script>
  export default {
    name: "Look"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .look-wrap
    .title
      text-align: center
      font-size .65rem
      height px2rem(119)
      line-height px2rem(119)
    .logo
      width 100%
    .user
      padding .4rem
      height px2rem(48)
      line-height px2rem(48)
      .user-avatar
        vertical-align middle
        width 1rem
        height 1rem
        border-radius 50%
        margin-right .8rem
      span
        vertical-align middle
        display inline-block
        height 1rem
        line-height 1rem
        font-size .7rem
    .message
      padding .4rem
      font-size .6rem
      line-height 1rem
      color gray
</style>
