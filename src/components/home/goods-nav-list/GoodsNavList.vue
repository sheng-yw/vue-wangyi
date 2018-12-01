<template>
  <div class="goods-nav" :class="name">
    <ul class="goods-list" ref="goodsUrl">
      <li class="goods-item" v-for="(good,index) in goodsNavList" :key="index">
        <a href="javascript:;">
          <div>
            <img :src="good.primaryPicUrl" alt="">
          </div>
          <p class="good-name">{{good.name}}</p>
          <p class="good-info">{{good.simpleDesc}}</p>
          <span class="good-price">¥{{good.retailPrice}}</span>
        </a>
      </li>

      <li class="goods-item">
        <div>
          <a href="javascript:;">
            查看全部
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      name: String,
      goodsNavList: Array
    },
    watch: {
      goodsNavList(){
        this.$nextTick(()=>{
          this.navWidth(this.$refs.goodsUrl);
          new BScroll(`.${this.name}`,{
            scrollX: true
          })
        })
      }
    },
    methods: {
      navWidth (dom) {
        let lis = dom.children;
        //小数有误差？？？？？？
        const width = Array.prototype.slice.call(lis).reduce( (pre, current) => pre + current.offsetWidth + 1,0)
        dom.style.width = width + 'px';
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .goods-nav
    padding-top .5rem
    .goods-list
      height 9rem
      .goods-item
        width 5.5rem
        float left
        padding 0 .4rem
        a
          display block
          div
            background #F4F4F4
            img
              width 5.5rem
          p,span
            padding 0 .1rem
            ellipse()
          .good-name
            font-size .7rem
          .good-info
            font-size .5rem
        &:last-child
          height 58%
          background #F4F4F4
          padding .2rem
          div
            background #fff
            /*height 98%*/
            /*width 98%*/
            text-align center
            font-size .7rem
            padding 2.3rem 0


</style>
