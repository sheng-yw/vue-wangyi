<template>
  <div class="right-wrap" ref="">
    <div class="detail" v-if="detail">
      <img v-lazy="detail.wapBannerUrl" :key="detail.id" alt="">
      <div class="detail-content">
        <span >{{detail.name}}分类</span>
      </div>
      <ul class="detail-list">
        <li v-for="(item,index) in detail.subCateList" :key="index">
          <a href="javascript:;">
            <img v-lazy="item.wapBannerUrl" :key="item.id" alt="">
            <p>{{item.name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['typeList']),
      detail(){
        const {id} = this.$route.params;
        return this.typeList.find(item => item.id === id*1)
      }
    },
    watch: {
      detail () {
        this.$nextTick(()=>{
          if (!this.scroll){
            this.scroll= new BScroll('.right-wrap',{
              scrollY: true
            })
          } else {
            this.scroll.refresh()
          }
          //通知scroll重新计算高度
        })

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .right-wrap
    float right
    width px2rem(587)
    height 100%
    background #fff

    .detail
      padding .5rem .5rem 0
      img
        width px2rem(528)
      .detail-content
        font-size .6rem
        text-align: center
        height px2rem(108)
        line-height px2rem(108)
        span
          position relative
          &:before
            position absolute
            top 50%
            left -1.1rem
            display block
            content ''
            width 1rem
            height 1px
            background #d9d9d9
          &:after
            position absolute
            top 50%
            right  -1.1rem
            display block
            content ''
            width 1rem
            height 1px
            background #d9d9d9
      .detail-list
        width px2rem(528)
        font-size 0
        /*padding-bottom 4rem*/
        li
          display inline-block
          vert-align middle
          width 33%
          text-align: center
          padding-bottom 1rem
          a
            img
              width px2rem(144)
              height px2rem(144)
            p
              color black
              height .8rem
              line-height .8rem
              font-size .5rem
              ellipse()

</style>
