<template>
  <div class="banner">
    <div class="swiper-container auto-nav ">
      <div class="swiper-wrapper nav-wrap">
        <div class="swiper-slide nav-item">
          <a href="javascript:;">
            <div class="banner-content">
              <span>严选推荐</span>
              <div>换条让你贪恋的好毛巾</div>
              <div>浴巾毛巾每满99元减15</div>
            </div>
            <img src="https://yanxuan.nosdn.127.net/9c9bbc692ff2b98e729a67ecca003dff.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide nav-item">
          <a href="javascript:;">
            <div class="banner-content">
              <span>严选推荐</span>
              <div>换条让你贪恋的好毛巾</div>
              <div>浴巾毛巾每满99元减15</div>
            </div>
            <img src="https://yanxuan.nosdn.127.net/9c9bbc692ff2b98e729a67ecca003dff.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide nav-item empty-item">
          <a href="javascript:;">
            <div class="banner-content">
              <span>严选推荐</span>
              <div>换条让你贪恋的好毛巾</div>
              <div>浴巾毛巾每满99元减15</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="swiper-container nav-recommend">
      <div class="swiper-wrapper recommend-list" ref="navDiv">
        <div class="swiper-slide recommend-item">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/1662ac1fabbc2e495bdda39357a93d65.png" alt="">
            <span class="title">316篇文章</span>
            <p class="info">严选推荐</p>
          </a>

        </div>
        <div class="swiper-slide recommend-item">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/1662ac1fabbc2e495bdda39357a93d65.png" alt="">
            <span class="title">316篇文章</span>
            <p class="info">严选推荐</p>
          </a>

        </div>
        <div class="swiper-slide recommend-item">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/1662ac1fabbc2e495bdda39357a93d65.png" alt="">
            <span class="title">316篇文章</span>
            <p class="info">严选推荐</p>
          </a>

        </div>
        <div class="swiper-slide recommend-item">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/1662ac1fabbc2e495bdda39357a93d65.png" alt="">
            <span class="title">316篇文章</span>
            <p class="info">严选推荐</p>
          </a>

        </div>
        <div class="swiper-slide recommend-item">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/1662ac1fabbc2e495bdda39357a93d65.png" alt="">
            <span class="title">316篇文章</span>
            <p class="info">严选推荐</p>
          </a>

        </div>
        <div class="swiper-slide recommend-item">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/1662ac1fabbc2e495bdda39357a93d65.png" alt="">
            <span class="title">316篇文章</span>
            <p class="info">严选推荐</p>
          </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import "swiper/dist/css/swiper.min.css"
  export default {
    mounted () {
      new Swiper('.auto-nav', {
        slidesPerView: 'auto',
        slidesOffsetBefore: 20,
        // autoplay:true,
        loop: true
      });
      this.navWidth(this.$refs.navDiv);
      new BScroll('.nav-recommend', {
        scrollX: true
      });
    },
    methods: {
      navWidth (dom) {
        let lis = dom.children;
        //小数有误差？？？？？？
        const width = Array.prototype.slice.call(lis).reduce( (pre, current) => pre + current.offsetWidth + 1,0)
        console.log(width);
        dom.style.width = width + 'px';
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .banner
    padding-top .7rem
    .auto-nav
      //clearFix()
      .nav-wrap
        font-size 0
        float left
        white-space nowrap
        .nav-item
          display inline-block
          vertical-align middle
          width px2rem(650)
          height px2rem(385)
          margin-right px2rem(20)
          a
            display block
            position relative
            width 100%
            height 100%
            .banner-content
              width px2rem(466)
              height px2rem(198)
              position absolute
              top 0
              bottom 0
              right 0
              left 0
              margin auto
              display flex
              justify-content center
              align-items center
              flex-direction column
              background rgba(255,255,255,.9)
              z-index 10
              span
                both-line()
              div
                width 100%
                color #333
                text-align: center
                font-weight 700
                height .9rem
                &:first-of-type
                  height 1rem
                  font-size .65rem
                &:last-child
                  height 1rem
                  font-size .5rem

            img
              width 100%
              height 100%
              border-radius .2rem
        .empty-item
          border 3px solid #FAFAFA
    .nav-recommend
      //clearFix()
      padding-bottom .5rem
      .recommend-list
        white-space nowrap
        font-size 0
        .recommend-item
          display inline-block
          vertical-align middle
          width px2rem(175)
          height  px2rem(220)
          padding .8rem 0 0 .6rem
          a
            display block
            position relative
            font-size .6rem
            text-align: center
            img
              width px2rem(164)
              height px2rem(164)
            .title
              color #fff
              text-align: right
              position absolute
              right 0
              top 0
              width px2rem(140)
              height .8rem
              line-height .8rem
              background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAkCAMAAACACIXcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRR4iAAAAAJdFJOUzIBDCsGFBshJgsYBQ0AAACFSURBVFjD7dfRCoAgDIVhNae9/xOHtbmguihkizqH7n8+LLAQdZmXZNRXeHXdvG6ShfvTplZ7l7Zw4Ww9q4b2PK4erORklW7hqoW1natwe9fkXO2t9CPrjmpsTbB+0op3eKQ1S9fSGlWK7xVWWGGF9R1W8rAmL6vL3R/nOvQucf0nOdy6AFfmJxZgLRTPAAAAAElFTkSuQmCC")
            .info
              padding-top .4rem
              text-align: center
              font-size .6rem
              height .8rem
              line-height .8rem


</style>
