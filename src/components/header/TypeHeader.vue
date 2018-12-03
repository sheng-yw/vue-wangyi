<template>
  <header class="type-header">
    <div class="content">
      <i></i>
      <span>搜索商品,共9739件商品</span>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .type-header
    width 100%
    height 1.3rem
    position fixed
    top 0
    left 0
    padding 0.35rem 0
    background #fff
    z-index 10
    .content
      width 90%
      height 1.3rem
      background #EDEDED
      border-radius .4rem
      margin 0 auto
      text-align: center
      line-height  1.3rem
      i
        width .6rem
        height  .6rem
        display inline-block
        vertical-align middle
        background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjQWelcAAAATdFJOUwDUDlMW8DUFcdHpnc3cSLkosSd78uTdAAAAvUlEQVQoz4WS6QLDEBCE131L0nn/d23J0VCV+bP4LLsM0S6Tg1NQLmRDnYz1OOVti18OcFZLI7Utw/XGtEIS10wkKH3NVoWF3/byBerMNQ5be4vZ4I4Vi8S7+niC3bd55L54yvA1VSDSryJqheE4oZVFKMFBD6AGK0FBDiCHKgEwA/hZfsxkszun1U77nL7Q9G3nvzL6z1sH2ndOANi3eRmrhzjx6qGo2Z327pMNJSMO34paSkc7PdJI/2lc3naRCwMB9sl5AAAAAElFTkSuQmCC")
        background-size 100%
        background-repeat no-repeat
      span
        font-size .6rem



</style>
