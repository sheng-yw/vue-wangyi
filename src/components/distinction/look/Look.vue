<template>
  <div class="look-wrap">
    <h2 class="title">严选LOOK</h2>
    <a href="javascript:;">
      <img class="logo" v-lazy="look.picUrl" alt="">
    </a>
    <div class="user">
      <img class="user-avatar" v-lazy="look.avatar" alt="">
      <span>{{look.nickname}}</span>
    </div>
    <p class="message">{{look.content}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      look: Object
    }
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
