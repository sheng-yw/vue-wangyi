<template>
  <div>
    <Nav />
    <section class="wrap">
      <div class="container" >
        <Banner />
        <div class="wy-slogan-info">
          <ul>
            <li v-for="(item, index) in policyDescList" :key="index">
              <a href="javascript:;">
                <i></i>
                <span>{{item.desc}}</span>
              </a>
            </li>
          </ul>
        </div>
        <Split/>
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
        <Split/>
        <DirectSupply/>
        <Split/>
        <div class="new-shop">

          <a href="javascript:;">
            <p>新品首发</p>
            <span>查看全部></span>
          </a>
        </div>
        <GoodsNavList name="nav1" :goodsNavList="newGoodsList"/>
        <Split/>
        <div class="new-shop popularity">

          <a href="javascript:;">
            <p>人气推荐.好物精选</p>
            <span>查看全部></span>
          </a>
        </div>
        <GoodsNavList name="nav2" :goodsNavList="popularList"/>
        <Split/>
        <div class="good-flash-sale">
          <div class="flash-left">
            <p>严选限时购</p>
            <p><span>{{hour<10? '0'+hour : hour}}</span>:
              <span>{{minute<10? '0'+ minute: minute}}</span>:
              <span>{{second<10? '0'+second:second }}</span></p>
            <p>下一场22:0开始</p>
          </div>
          <div class="flash-right">
            <img src="http://yanxuan.nosdn.127.net/969d44f72fa4453b0ccc71799ec83335.png" alt="">
            <div class="discounts">
              <p>￥54 <br>￥68</p>
            </div>
          </div>
        </div>
        <Split/>
        <div class="welfare-service">
          <a href="javascript:;">
            <img src="../../../static/img/swlfare-service.jpg" alt="">
          </a>
        </div>
        <Split/>
        <Selection/>
        <Split/>
        <div v-for="(item) in goodTypes" :key="item.id">
          <GoodsList :goodType="item"/>
          <Split/>
        </div>
        <footer class="home-footer">
          <div class="footer-button">
            <a href="javascript:;">下载app</a>
            <span class="span-split"></span>
            <a href="javascript:;">电脑版</a>

          </div>
          <p>网易公司版权所有 © 1997-2018</p>
          <p>食品经营许可证：JY13301080111719</p>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import Nav from '../../components/home/nav/Nav.vue'
  import Banner from '../../components/home/banner/Banner.vue'
  import Split from '../../components/split/Split.vue'
  import DirectSupply from '../../components/home/direct-supply/DirectSupply.vue'
  import GoodsNavList from '../../components/home/goods-nav-list/GoodsNavList.vue'
  import Selection from '../../components/home/selection/Selection.vue'
  import GoodsList from '../../components/home/goods-list/GoodsList.vue'

  export default {
    data () {
      return {
        hour:2,
        minute: 43,
        second: 56
      }
    },
    computed: {
      ...mapState(['newGoodsList', 'popularList', 'goodTypes', 'policyDescList'])
    },
    mounted () {
      this.$store.dispatch('getHomeDate',this.createScroll);
      setInterval(()=>{
        this.second --;
        if (this.second <=0){
          this.second = 59;
          this.minute --;
        }
        if (this.minute<=0){
          this.minute = 59;
          this.hour --;
        }
        if (this.hour <= 0) {
          this.hour=0;
        }
      },1000)
    },
    methods: {
      createScroll(){
        this.$nextTick(()=>{
          new BScroll('.wrap',{
            scrollY: true
          })
        });
      }
    },
    components: {
      Nav,
      Banner,
      Split,
      DirectSupply,
      GoodsNavList,
      Selection,
      GoodsList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "swiper/dist/css/swiper.min.css"
  @import "../../common/stylus/mixins.styl"
  .swiper-pagination-bullet
    width .8rem
    height 5px;
    border-radius 10px 50%
  .good-price
    font-size .6rem
    color darkred

  .wrap
    position absolute
    top 3.3rem
    bottom 2rem
    left 0
    right 0
    .split
      width 100%
      height .3rem

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

    .new-shop
      &.popularity
        background #FEF7E3
        color: #C9B896
        span
          background #F4E9CB
      height 7rem;
      background #EEF5FC
      text-align: center
      a
        display inline-block
        margin-top 2.5rem
        p
          font-size .9rem
        span
          margin-top .4rem
          font-size .6rem
          display inline-block
          width 6rem
          height 1rem
          line-height 1rem
          background #D8E5F1


    .good-flash-sale
      height px2rem(340)
      width px2rem(750)
      padding px2rem(10) 0
      .flash-left
        float left
        width 50%
        text-align: center
        p
          margin-top .8rem
          &:first-child
            font-size .8rem
          &:last-child
            font-size .6rem
        span
          display inline-block
          vertical-align middle
          width px2rem(62)
          height px2rem(56)
          line-height  px2rem(56)
          background #444
          color: #fff
          font-size .7rem
      .flash-right
        float right
        width 50%
        position relative
        img
          width 80%
        .discounts
          width 2rem
          height 2rem
          border-radius 50%
          background #F59524
          position absolute
          bottom  .5rem
          right 1.8rem
          p
            padding .4rem 0 0
            text-align: center
            color #fff
            font-size .6rem
    .welfare-service
      width px2rem(750)
      height  px2rem(300)
      img
        width 100%
        height 100%


    .home-footer
      height px2rem(256)
      background #414141
      .footer-button
        padding 1.2rem 0 .8rem
        text-align: center
        a
          font-size .7rem
          display inline-block
          padding .3rem
          border 1px solid #fff
          color #fff
        .span-split
          display inline-block
          width 1rem
          border none

      p
        color gray
        text-align: center
        padding-top .2rem
        font-size .5rem
</style>
