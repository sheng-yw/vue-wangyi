<template>
  <div class="direct-supply">
    <div class="direct-title">
      <p>品牌制造商直供</p>
      <span>更多></span>
    </div>
    <div class="direct-list">
      <a class="direct-item" href="javascript:;" v-for="(item) in homeDirectSupplyList" :key="item.id"
         :style="{backgroundImage: 'url('+item.picUrl+')'}">
        <p>{{item.name}}</p>
        <span>{{item.floorPrice}}元起</span>
      </a>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['homeDirectSupplyList'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
      height 10.8rem
      .direct-item
        float left
        width 49.5%
        height 49%
        background lemonchiffon
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
        text-align: left
        p
          font-size .7rem

        span
          font-size .5rem


</style>
