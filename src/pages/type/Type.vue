<template>
  <div>
    <Header/>
    <div class="type-wrap">
      <div class="left-wrap">
        <ul class="left-ul" >
          <li v-for="(type, index) in typeList" :key="index" @click="gotoDetail(index)"><!--@click="gotoDetail(type.id)"-->
            <router-link :class="{active:currentIndex === index}"  :to="`/type/detail/${type.id}`"  >{{type.name}}</router-link >
          </li>
        </ul>
      </div>
        <router-view />
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import Header from '../../components/header/TypeHeader.vue'
  import TypeDetail from './type-detail/TypeDetail.vue'
  export default {
    data () {
      return {
        currentIndex: 0
      }
    },
    computed: {
      ...mapState(['typeList'])
    },
    mounted(){
      this.$store.dispatch('getTypeData');
    },
    watch: {
      typeList () {
        const id = this.typeList[this.currentIndex].id;
        this.$router.replace(`/type/detail/${id}`);
        this.$nextTick(()=>{
          new BScroll('.left-wrap',{
            scrollY: true
          })
        })
      }
    },
    methods:{
      gotoDetail(index) {
        this.currentIndex = index;
      }
    },
    components:{
      Header,
      TypeDetail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .type-wrap
    position absolute
    top 2rem
    bottom 2rem
    left 0
    right 0
    background #EDEDED
    padding-top .1rem
    .left-wrap
      float: left
      width px2rem(161)
      height 100%
      background #fff
      font-size .6rem
      .left-ul
        padding-top .2rem
        padding-bottom .8rem
        li
          padding-top .8rem

          a
            height px2rem(55)
            line-height px2rem(55)
            text-align: center
            display block
            &.active
              height px2rem(70)
              line-height px2rem(70)
              border-left .1rem solid darkred
              color darkred
              font-size .75rem

</style>
