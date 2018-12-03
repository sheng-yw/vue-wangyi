<template>
  <div class="center-nav-wrap">
    <h2 class="title">十点一刻</h2>
    <div class="center-nav">
      <ul class="nav-wrap">
        <li class="nav-item">
          <span>今日话题</span>
          <p class="question">如果生命只剩一天</p>
          <p class="choose">你会选择怎么度过</p>
          <p class="topic">7人参与话题</p>
        </li>
        <li class="nav-item">
          <span>今日话题</span>
          <p class="question">如果生命只剩一天</p>
          <p class="choose">你会选择怎么度过</p>
          <p class="topic">7人参与话题</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    mounted(){
      new BScroll('.center-nav',{
        scrollX: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .center-nav-wrap
    padding-left px2rem(30)
    padding-bottom  px2rem(30)
    position relative
    .title
      text-align: center
      height px2rem(119)
      line-height px2rem(119)
      font-size .6rem
    .center-nav
      height px2rem(410)
      .nav-wrap
        position absolute
        left 0
        top height px2rem(119)

        white-space nowrap
        .nav-item
          display inline-block
          vertical-align middle
          margin-left px2rem(30)
          width px2rem(632)
          height px2rem(410)
          background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAGbBAMAAADXTpIOAAAAHlBMVEUAAADn5+fr6+vn5+fo6Ojr6+vm5ubo6Ojy8vL6+vrAm3THAAAABnRSTlMAQEvA0ONT1GB5AAACbUlEQVR42u3T0QlCQRRDwW3JFuzAJrYVa7Bbf0UeROFdxDCngcBA1lZoIUCECBEiRIgQCdE3RA8dhggRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChAgRIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIECFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECFChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIkSIECFChAgRIkSIECFChAgRIkRChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFChAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIfkd0Tkcj9/33DRMVCA0TNQjNElUIjRJ1CE0SlQgNErUIzRHVCI0R9QhNERUJ7XVOb0QvQpelAyJCiYhQIiKUiAglIkKJiFAiIpSICCUiQomIUCQi9DkRoUREKBERSkSEEhGhREQoERFKRIQSEaFERCgREUpEhBLRDUIgujIINb/sCeTQbvXhK7c0AAAAAElFTkSuQmCC")
          background-size 100% 100%
          background-repeat no-repeat
          text-align: center
          span
            margin-top .4rem
            both-line()
          .question
            margin-top .6rem
            font-size .85rem
            font-weight 700
          .choose
            margin-top .8rem
            font-size .7rem
            color gray
          .topic
            margin-top 1.6rem
            font-size .5rem
            color gray

</style>
