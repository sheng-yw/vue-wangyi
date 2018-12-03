<template>
  <div class="more-splendid-wrap">
    <div class="more-splendid">
      <h2>更多精彩</h2>
    </div>
    <div class="more-content" v-for="(item,index) in more" :key="index">
      <a href="javascript:;">
        <img v-lazy="item.itemPicUrl" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      more: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .more-splendid-wrap
    background #f4f4f4
    padding 0 px2rem(30)
    .more-splendid
      height px2rem(139)
      line-height px2rem(139)
      text-align: center
      h2
        font-size .6rem
        font-size 300
        position relative
        &:before
          position absolute
          top 50%
          left 0
          content ''
          display block
          width px2rem(264)
          height 1px
          background #e8e8e8
        &:after
          position absolute
          top 50%
          right 0
          content ''
          display block
          width px2rem(264)
          height 1px
          background #e8e8e8
    .more-content
      padding-top px2rem(30)
      padding-bottom  px2rem(50)
      background #fff
      text-align: center
      margin-bottom px2rem(30)
      img
        width px2rem(642)
      p
        padding-top px2rem(30)
        font-size .6rem
        padding-left .5rem
        text-align: left

</style>
