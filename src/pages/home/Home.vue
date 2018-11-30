<template>
  <div>
    <div class="home-header">
      <Header/>
      <div class="nav-wrap">
        <ul class="nav" ref="ulScroll">
          <li><a href="javascript:;" class="active">推荐</a></li>
          <li><a href="javascript:;">家居</a></li>
          <li><a href="javascript:;">鞋包配饰</a></li>
          <li><a href="javascript:;">服装</a></li>
          <li><a href="javascript:;">电器</a></li>
          <li><a href="javascript:;">洗护</a></li>
          <li><a href="javascript:;">饮食</a></li>
          <li><a href="javascript:;">餐具</a></li>
          <li><a href="javascript:;">婴童</a></li>
          <li><a href="javascript:;">文体</a></li>
          <li><a href="javascript:;">特色区</a></li>
          <li><a href="javascript:;"></a></li>
        </ul>
      </div>
      <div class="nav-right-pull-down">
        <span></span>
      </div>
    </div>
    <section class="wrap">
      <div class="container" style="height: 10000px;">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><a href="javascript:;"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></a></div>
            <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
            <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
            <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
            <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
            <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
            <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
            <div class="swiper-slide"><a href="javascript:;"><img class="swiper-slide" src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg" alt=""></a></div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="wy-slogan-info">
          <ul>
            <li>
              <a href="javascript:;">
                <i></i>
                <span>网易自营品牌</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <span>30天无忧退货</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <span>48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="split-color"></div>
        <div class="new-user-welfare">
          <h2>— 新人专享礼 —</h2>
          <div class="welfare-wrap">
            <div class="welfare-left">
              <p>新人专享礼包</p>
              <div >
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
                </a>
              </div>
            </div>
            <div class="welfare-right">
              <div class="welfare-r-t">
                <a href="javascript:;">
                  <p>福利社 <br>
                    <span>今日特价</span>
                  </p>
                  <img src="http://yanxuan.nosdn.127.net/995c238dea8fea5e9cd92d07ebf73856.png" alt="">
                  <div class="discounts">
                    <p>￥54 <br>￥68</p>
                  </div>
                </a>
              </div>
              <div class="welfare-split"></div>
              <div class="welfare-r-b">
                <a href="javascript:;">
                  <p>新人拼团 <br>
                    <span>1元起包邮</span>
                  </p>
                  <img src="http://yanxuan.nosdn.127.net/d59eacdaaf45cff38c59ecae3845b8d6.png" alt="">
                  <div class="discounts">
                    <p>￥54 <br>￥68</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="split-color"></div>
        <div class="direct-supply">
          <div class="direct-title">
            <p>品牌制造商直供</p>
            <span>更多></span>
          </div>
          <div class="direct-list">
            <a class="direct-item" href="javascript:;">
              <p>海外制造商</p>
              <span>9.9元起</span>
            </a>
            <a class="direct-item" href="javascript:;">
              <p>海外制造商</p>
              <span>9.9元起</span>
            </a>
            <a class="direct-item" href="javascript:;">
              <p>海外制造商</p>
              <span>9.9元起</span>
            </a>
            <a class="direct-item" href="javascript:;">
              <p>海外制造商</p>
              <span>9.9元起</span>
            </a>
          </div>
        </div>
        <div class="split-color"></div>
      </div>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'

  import Header from '../../components/header/Header.vue'
  export default {
    async mounted () {
      // let lis = this.$refs.ulScroll.children;
      // const width = Array.prototype.slice.call(lis).reduce( (pre, current) => pre + current.offsetWidth,0)
      // this.$refs.ulScroll.style.width = width + 'px';
      new BScroll('.nav-wrap',{
        scrollX: true
      })
      new BScroll('.wrap',{
        scrollY: true
      })
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "swiper/dist/css/swiper.min.css"
  @import "../../common/stylus/mixins.styl"
  .home-header
    padding-top 2rem
    position relative
    z-index 10
    background #fff
    .nav
      white-space nowrap
      height 1.3rem
      width 12*2.7 rem
      font-size 0
      li
        display inline-block
        width 2.7rem
        font-size .6rem
        text-align: center
        height 100%
        vertical-align middle
        a
          display inline-block
          padding 0 .2rem
          height 1.2rem
          line-height 1rem
          &.active
            border-bottom .1rem solid #b4282d
            color: #b4282d
    .nav-right-pull-down
      width 2rem
      position absolute
      right 0
      top 2rem
      background white
      height 1.3rem
    span
      width .9rem
      height .9rem
      display block
      margin 0 auto
      background-image url("../../../static/img/pull-down.png")
      background-repeat no-repeat
      background-size .8rem .8rem
  .wrap
    position absolute
    top 3.3rem
    bottom 2rem
    left 0
    right 0
    .split
      width 100%
      height .3rem
    .split-color
      background #f4f4f4
      width 100%
      height .5rem
    .wy-slogan-info
      width 100%
      height 1.5rem
      font-size 0rem
      /*line-height 1.5rem*/
      ul
        width 100%
        height 100%
        li
          float left
          width 33%
          text-align: center
          height 100%
          a
            display inline-block
            vert-align middle
            display flex
            align-items center
            justify-content center
            height 100%
            i
              font-size 0
              vert-align middle
              width .7rem
              height  .7rem
              display inline-block
              background-image url("../../../static/img/wy-slogan.png")
              background-repeat no-repeat
              background-size 100% 100%
            span
              display inline-block
              height  .7rem
              vert-align middle
              font-size .5rem
              line-height .7rem
    .new-user-welfare
      padding .5rem
      h2
        text-align: center
        font-size .7rem
      .welfare-wrap
        width 100%
        margin .3rem auto 0
        clearFix()
        .welfare-left
          width 49.8%
          height 9.5rem
          float left
          background #F9E9CF
          p
            height 1rem
            padding 1rem 0 0 1rem
            font-size .7rem
          div
            height 7.5rem
            width 100%
            text-align: center
            img
              margin-top .8rem
              width 4.7rem
              height 4.7rem
        .welfare-right
          float right
          width 49.8%
          height 9.5rem
          font-size .7rem
          p
            height 1rem
            padding 1rem 0 0 .6rem
          span
            font-size .4rem
          a
            height 100%
            display block
            position relative
            img
              position absolute
              right 0rem
              top 0rem
              width 4.5rem
              height 4.5rem
          .discounts
            width 2rem
            height 2rem
            border-radius 50%
            background #F59524
            position absolute
            top .5rem
            right .8rem
            p
              padding .4rem 0 0
              text-align: center
              color #fff
              font-size .6rem
          .welfare-r-t
            height  49.8%
            background #FBE2D3
          .welfare-split
            height 0.4%
            background #fff
          .welfare-r-b
            background #FFECC2
            height  49.8%
            span
              padding 0 .2rem
              background #CBB693
              color: #fff
    .direct-supply
      padding .5rem
      .direct-title
        height 1rem
        line-height 1rem
        p
          float left
          font-size .8rem
        span
          float right
          font-size .6rem

      .direct-list
        padding-top  1rem
        height 12.8rem
        .direct-item
          float left
          width 49.5%
          height 49%
          background lemonchiffon
          background-image url("../../../static/img/bg-1.jpg")
          background-repeat no-repeat
          background-size 100% 100%
          text-align: center
          padding-top .4rem
          color black
          &:nth-child(odd){
            border-right 2px solid #fff
          }
          &:nth-child(1){
            border-bottom 2px solid #fff
          }
          &:nth-child(2){
            border-bottom 2px solid #fff
          }
          p
            font-size .7rem

          span
            font-size .5rem


</style>
