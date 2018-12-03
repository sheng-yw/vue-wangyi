<template>
  <header class="header">
    <div class="header-left">
      <h1 class="logo"></h1>
    </div>
    <div class="header-center">
      <div>
        <i class="search"></i>
        <span>搜索商品,共19661件商品</span>
      </div>
    </div>
    <div class="header-right">
      <a href="javascript:;">登录</a>
    </div>
  </header >

</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/iconfont/iconfont.css"
  @import "http://at.alicdn.com/t/font_942450_cq06yburj8a.css"
  .header
    position: fixed;
    top: 0;
    left: 0;
    height: 1.2rem;
    width: 100%;
    padding-top .3rem
    z-index 10
    background #fff
    div
      height 100%
    .header-left
      float left
      width 25%
      .logo
        box-sizing padding-box
        padding-top .2rem
        height 100%
        width 75%
        margin 0 auto
        /*font-size .9rem*/
        /*font-family ""*/
        background-image url("../../../static/img/wyyx.png")
        background-size: 2.9rem .9rem
        background-repeat no-repeat
    .header-center
      float left
      width 60%
      font-size .6rem
      div
        width 100%
        height 100%
        background #ededed
        border-radius .3rem
        display flex
        align-items:center
        i
          margin-left 1rem
          width .8rem
          height  .8rem
          background-image url("../../../static/img/search.png")
          background-size 100% 100%
          background-repeat no-repeat
        span
          color gray
    .header-right
      float right
      width 15%
      display flex
      align-items center
      a
        text-align: center
        width 1.1rem
        display block
        margin 0 auto
        color #b4282d
        border: 1px solid #b4282d
        font-size .5rem
        padding .2rem
        border-radius .3rem


</style>
