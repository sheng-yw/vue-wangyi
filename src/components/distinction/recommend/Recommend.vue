<template>
  <div class="recommend-wrap">
    <h2 class="title">为你推荐</h2>
    <div class="recommend-main">
      <img src="https://yanxuan.nosdn.127.net/09d83c97c9963495e6518cfbec776b4c.jpg" alt="">
      <p class="recommend-title"><span>如何做清新的白衣少年</span> <span>9.9元起</span></p>
      <p class="recommend-info">少年感养成必备好物，每满149立减20元</p>
    </div>
    <div class="split"></div>
    <div class="recommend-other">
      <div class="other-left">
        <div>
          <p class="other-title">今年世界杯喝什么</p>
          <p class="other-info">拉格啤酒8.5折特价，买即赠小龙虾优惠券</p>
        </div>
      </div>
      <div class="other-right">
        <img src="https://yanxuan.nosdn.127.net/7af712a2e7af35c752a45ab1451c33a2.jpg" alt="">
        <span>丁磊的好货推荐</span>
      </div>
    </div>
    <div class="split"></div>
    <div class="recommend-other">
      <div class="other-left">
        <div>
          <p class="other-title">今年世界杯喝什么</p>
          <p class="other-info">拉格啤酒8.5折特价，买即赠小龙虾优惠券</p>
        </div>
      </div>
      <div class="other-right">
        <img src="https://yanxuan.nosdn.127.net/7af712a2e7af35c752a45ab1451c33a2.jpg" alt="">
        <span>丁磊的好货推荐</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .recommend-wrap
    width 16rem
    height px2rem(1317)
    padding-bottom .8rem
    .title
      font-size .6rem
      text-align: center
      width 100%
      height px2rem(120)
      line-height px2rem(120)
    .recommend-main
      margin  0 px2rem(30)
      border 1px solid #f4f4f4
      padding-bottom 1.2rem
      img
        width 100%
      p
        margin .8rem 0 0 .4rem
      .recommend-title
        clearFix()
        font-size .8rem
        span
          &:first-child
            float left
          &:last-child
            float right
      .recommend-info
        font-size .6rem
        color gray
    .split
      height .7rem
    .recommend-other
      border 1px solid #f4f4f4
      width px2rem(690)
      height  px2rem(272)
      margin  0 px2rem(30)
      .other-left
        height 100%
        width px2rem(358)
        margin 0 px2rem(25)
        float left
        display:flex;
        div
          display:flex;
          flex-direction column
          justify-content: center;/*水平居中*/
          .other-title
            font-size .8rem
            margin-bottom .5rem
          .other-info
            width 80%
            font-size .5rem
            ellipse()
            color gray
      .other-right
        float right
        height 100%
        position relative
        width px2rem(280)
        img
          width 100%
          height 100%
        span
          font-size .5rem
          position absolute
          left .2rem
          top .2rem
          background #fff
          padding .2rem
          border-radius .5rem



</style>
