<template>
  <header class="header">
    <div class="header-left">
      <h1 class="logo"></h1>
    </div>
    <div class="header-center">
      <div>
        <i class="ic"></i>
        <span></span>
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
      div
        width 100%
        height 100%
        background #ededed
        border-radius .3rem
    .header-right
      float right
      width 15%
      a
        width 60%
        display block
        margin 0 auto
        border: 1px solid #b4282d
        font-size .7rem
        padding .2rem
        border-radius .3rem


</style>
