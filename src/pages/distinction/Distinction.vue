<template>
  <div>
    <Header/>
    <section class="distinction-wrap">
      <div v-if="distinctionData.banner">
        <TopBanner :banner="distinctionData.banner" :tabColumn ="distinctionData.column"/>
        <Split />
        <Recommend :recomemend="distinctionData.recommend"/>
        <Split/>
        <CenterNav :centerNav="distinctionData.tenfifteen"/>
        <Split/>
        <Recommend :recomemend="distinctionData.zhen"/>
        <Split/>
        <Look :look="distinctionData.yxLook"/>
        <Split/>
        <MoreSplendid :more="distinctionData.yxWeek"/>
      </div>
    </section>
    <div class="button" @click="goTop"></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import Header from '../../components/header/Header.vue'
  import TopBanner from '../../components/distinction/top-banner/TopBanner.vue'
  import Split from '../../components/split/Split.vue'
  import Recommend from '../../components/distinction/recommend/Recommend.vue'
  import CenterNav from '../../components/distinction/center-nav/CenterNav.vue'
  import Look from '../../components/distinction/look/Look.vue'
  import MoreSplendid from '../../components/distinction/more-splendid/MoreSplendid.vue'
  import UpButton from '../../components/up-button/UpButton.vue'
  export default {
    computed:{
      ...mapState(['distinctionData'])
    },
    mounted(){
      this.$store.dispatch('getDistinctionData');

    },
    watch: {
      distinctionData(){
        this.$nextTick(()=>{
          this.scroll= new BScroll('.distinction-wrap',{
            scrollX:false,
            scrollY: true
          })
        })
      }
    },
    methods: {
      goTop () {
        this.scroll.scrollTo(0, 0, 1000)
      }
    },
    components: {
      Header,
      TopBanner,
      Split,
      Recommend,
      CenterNav,
      Look,
      MoreSplendid,
      UpButton
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
  .button
    position absolute
    bottom 2rem
    right 0
    width px2rem(100)
    height  px2rem(100)
    background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURf///7i4uPn5+fr6+gAAAPb29kZGRkdwTAICAgAAAM/Pz9/f34qKim1tberq6mVlZcHBweTk5I+Pj8zMzK6urvLy8n9/f3V1deTk5O7u7lxcXNCpSF4AAAAadFJOU+RX4dcIzR4AEAN4lDYpr/5l6vjt8sT6/KC6nEkVDwAAAkZJREFUWMO1mdeCgyAQRS/NiDVZyyb+/4cumrJGpajMfU08MIUBBlw80lKmM0mpfV/AjUvTkmV51QkOCNVVecZKw9XHkIaXsLzDSl3OEhcVdiC7c1jE78wOhQWYZApOqSyxQGEBCnglLNANpE6vCkFS11QHILUsKgSrKtYTxXqKAjsk1hNdIHWSY6fyRLuQsnxgtx6ltCNloXBAqpA25EHikokIxAXzH6nLw0TDLPUaqZMHTujxH3d88jHHKeWf/Hwj5RUndZXfSF2Is0hR6DlSpxVOq3qZjkhmz0zHM9oqBlI9oz4hZYYoyuQbqRMRBymmaSLiJF/TxBhuFQupxqAbpGSIJiYnZHqPh7ynI1InPB6SmwAhqt2T5bicLUHLgjQiQ+Ld9HXdN0Exv0CXAX/8GSb9BPy11Ahw5a0f6pbzth76W4Az4V86TT38Tqjb71A3/gUEb3RaY/ArzbhxQOuND3zF95vSeh1aGWTnc2Oz8ILboZ1BihA3zgbxOFQYJA9y42zNuR3KDdL+o+3bzZE+ciAdFm744wspDnzmGG40XGG/cQ6HCksSBeS0bczOkup9wMobM9SS6lsLsg+oD8ah/faCjLfjfspG3H1iKm5BJXiHTAm+xDsYvDcKiu2MYNMlOBoQHGAojlkEh0GCIyvFwZrg+E9xSSG4SlFc+AiupRSXZ4orPkEjgqJdQtHUoWg9jczuCLGzN8go2ngUzcYxP9m+lijztUQpGrcU7WWSJjhFq57kQYHk2WPjcYaLs48zh5+Q/gA8BEBW6ufeJgAAAABJRU5ErkJggg==")
    background-size 100% 100%
    background-repeat no-repeat
</style>
