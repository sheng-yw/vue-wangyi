<template>
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
</template>

<script>
  import BScroll from 'better-scroll'

  import Header from '../../header/HomeHeader.vue'
  export default {
    mounted() {
      new BScroll('.nav-wrap',{
        scrollX: true
      })
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
        background-image url("../../../../static/img/pull-down.png")
        background-repeat no-repeat
        background-size .8rem .8rem

</style>
