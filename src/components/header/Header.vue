<template>
  <header class="header">
    <div class="header-left">
      <a href="/home" class="home">
        <span class="iconfont icon-home"></span>
      </a>
    </div>
    <div class="header-center">
      <h1 >
        <span class="logo"></span>
      </h1>
    </div>
    <div class="header-right">
      <a href="">
        <span class="search"></span>
      </a>
      <a href="/cart">
        <span class="go-shop"></span>
      </a>
    </div>
  </header >
</template>

<script>
  export default {
    name: "DistinctionHeader"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "http://at.alicdn.com/t/font_942450_cq06yburj8a.css"
  @import "../../common/stylus/mixins.styl"
  .header
    position: fixed;
    top: 0;
    left: 0;
    height: px2rem(88);
    width: 100%;
    z-index 10
    background #FAFAFA
    bottom-border-1px(#e2e2e3)
    div
      padding-top .3rem
    .header-left
      float left
      width 15%
      text-align: center
      .icon-home
        font-size 1rem
        color #D7D7D7
    .header-center
      float left
      width 65%
      text-align: center
      .logo
        width px2rem(172)
        height  px2rem(54)
        display inline-block
        vertical-align middle
        background-image url("../../../static/img/wyyx.png")
        background-size: 100%
        background-repeat no-repeat
    .header-right
      float right
      width 20%
      text-align: center
      a
        display inline-block

        .search
          display inline-block
          width 1.2rem
          height  1.2rem
          background-image url("../../../static/img/search.png")
          background-size 100%
          background-repeat no-repeat
          color #D7D7D7
        .go-shop
          color #D7D7D7
          display inline-block
          width 1.2rem
          height  1.2rem
          background-image url("../../../static/img/go-shop.png")
          background-size 100%
          background-repeat no-repeat



</style>
