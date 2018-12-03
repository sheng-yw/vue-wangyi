<template>
  <div class="recommend-wrap">
    <h2 class="title">{{recomemend.name}}</h2>

    <div class="recommend-main">
      <img v-lazy="recomemend.Item[0].picUrl" alt="">
      <p class="recommend-title"><span>{{recomemend.Item[0].title}}</span> <span>{{recomemend.Item[0].priceInfo}}元起</span></p>
      <p class="recommend-info">{{recomemend.Item[0].subTitle}}</p>
    </div>
    <div class="split"></div>
    <div class="recommend-other">
      <div class="other-left">
        <div>
          <p class="other-title">{{recomemend.Item[1].title}}</p>
          <p class="other-info">{{recomemend.Item[1].subTitle}}</p>
        </div>
      </div>
      <div class="other-right">
        <img v-lazy="recomemend.Item[1].picUrl" alt="">
        <span>{{recomemend.Item[1].typeName}}</span>
      </div>
    </div>
    <div class="split"></div>
    <div class="recommend-other">
      <div class="other-left">
        <div>
          <p class="other-title">{{recomemend.Item[2].title}}</p>
          <p class="other-info">{{recomemend.Item[2].subTitle}}</p>
        </div>
      </div>
      <div class="other-right">
        <img v-lazy="recomemend.Item[2].picUrl" alt="">
        <span>{{recomemend.Item[2].typeName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recomemend: Object
    }
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
            width px2rem(338)
            font-size .8rem
            margin-bottom .5rem
            ellipse()
          .other-info
            width px2rem(328)
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
