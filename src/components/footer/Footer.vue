<template>
  <div class="footer">
    <ul class="footer-nav">
      <li>

        <a href="javascript:;" class="home " :class="{active: $route.fullPath==='/home'}" @click="gotoRouter('/home')" ><!--class="home active"-->
          <i ></i><!--class="iconfont icon-home"-->
          <span>首页</span>
        </a>
      </li>
      <li>
        <a href="javascript:;"class="type":class="{active: $route.fullPath==='/type'}"  @click="gotoRouter('/type')">
        <i ></i>
        <span>分类</span>
        </a>
      </li>
      <li>
        <a href="javascript:;"class="distinction":class="{active: $route.fullPath==='/distinction'}"  @click="gotoRouter('/distinction')">
          <i ></i>
          <span>识物</span>
        </a>
      </li>
      <li>
        <a href="javascript:;"class="cart" :class="{active: $route.fullPath==='/cart'}"  @click="gotoRouter('/cart')">
          <i ></i>
          <span>购物车</span>
        </a>
      </li>
      <li>
        <a href="javascript:;"  class="personal" :class="{active: $route.fullPath==='/personal'}" @click="gotoRouter('/personal')">
          <i></i>
          <span>个人</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log(this);
    },
    methods: {
      gotoRouter (url) {
        this.$router.replace(url);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*@import "http://at.alicdn.com/t/font_942450_cq06yburj8a.css"*/
  @import "../../common/stylus/mixins.styl"
  .footer
    position fixed
    bottom 0
    left 0
    width 100%
    height 2rem
    z-index 10
    background #fff
    .footer-nav
      width 100%
      height 100%
      li
        float left
        width 20%
        height 100%
        a
          display block
          height 100%
          width 40%
          text-align: center
          margin: 0 auto
          display flex
          flex-direction column
          justify-content center
          align-items center
          &.active
            color #ff3135
          &.home
            i
              change-footer-img(0, -6.3rem)
            &.active
              i
                change-footer-img(0, -5.1rem)
          &.type
            i
              change-footer-img(0, -3.73rem)
            &.active
              i
                change-footer-img(0, -2.52rem)
          &.distinction
            i
              change-footer-img(0, -8.7rem)
            &.active
              i
               change-footer-img(0, -7.5rem)
          &.cart
            i
             change-footer-img(0, -1.25rem)
            &.active
              i
               change-footer-img(0, 0rem)
          &.personal
            i
             change-footer-img(0, -11.3rem)
            &.active
              i
                change-footer-img(0, -10.1rem)
          i
            height 50%
            width 100%

          span
            height 50%
            width 100%
            font-size .6rem
            line-height .9rem



</style>
