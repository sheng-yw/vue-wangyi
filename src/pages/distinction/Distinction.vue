<template>
  <div>
    <Header/>
    <section class="distinction-wrap">
      <div>
        <TopBanner />
        <Split/>
        <Recommend/>
        <Split/>
        <CenterNav />
        <Split/>
        <Recommend/>
        <Split/>
        <Look/>
        <Split/>
        <MoreSplendid/>
      </div>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  import Header from '../../components/header/DistinctionHeader.vue'
  import TopBanner from '../../components/distinction/top-banner/TopBanner.vue'
  import Split from '../../components/split/Split.vue'
  import Recommend from '../../components/distinction/recommend/Recommend.vue'
  import CenterNav from '../../components/distinction/center-nav/CenterNav.vue'
  import Look from '../../components/distinction/look/Look.vue'
  import MoreSplendid from '../../components/distinction/more-splendid/MoreSplendid.vue'
  export default {
    mounted(){
      new BScroll('.distinction-wrap',{
        scrollX:false,
        scrollY: true
      })
    },
    components: {
      Header,
      TopBanner,
      Split,
      Recommend,
      CenterNav,
      Look,
      MoreSplendid
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .distinction-wrap
    position absolute
    top px2rem(88)
    bottom 2rem
    left 0
    right 0

</style>
