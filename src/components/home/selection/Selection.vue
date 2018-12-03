<template>
  <div class="selection">
    <h2>专题精选 <i></i></h2>
    <div class="selection-nav">
      <ul  ref="selectionUl">
        <li v-for="(item) in selectionList" :key="item.id">
          <a href="javascript:;">
            <img v-lazy="item.itemPicUrl" alt="">
            <p><span>{{item.title}}</span> <span class="good-price">{{item.priceInfo}}元起</span></p>
            <p>{{item.subtitle}}</p>
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
    computed:{
      ...mapState(['selectionList'])
    },
    watch: {
      selectionList(){
        this.$nextTick(()=>{
          this.navWidth(this.$refs.selectionUl);
          new BScroll('.selection-nav',{
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

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .selection
    text-align: center
    padding-top 1rem
    h2
      font-size .7rem
      i
        display inline-block
        vertical-align middle
        width .7rem
        height .7rem
        background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAAAAAAeW/F+AAAAAnRSTlMA/1uRIrUAAAE1SURBVCjPhVM9a8MwENU/f2BDS06k0Ba62AUthizdYg8txIPbIbOWekggKSVZSgkOGGqZ6+AvyS3xLZbvWed3d+8J7sLkSSh9X4ZJbvqkaJ9lSuhjlpYurCWgsn1RVcU+U4DUFlwvgWjTV+RNBCzrDq4XwJqdWAOLuoVjyCOP4igRN7AGDm3ye8APgGYWXFJf+c3f2vWpZMEpoi7zgquPAY+QsjCEgfMT6GvgDzIihxoumAi3p/5NIRcJMovwT4CHbmKcIRaP2NkNne+hqva8QygIZ6fh0xzP3acg4aFyB/KJeXuq4P0H31jwRPFwRO0OyljULjT2ivjvWAprLO/CzC4O1V3J9XglUwudkMOUmKak2AjZ+u3WETIza2psYExjA9IjE61mlolWIxM1FgzI8yiwLfgLLd4VfbLC0WAAAAAASUVORK5CYII=")
        background-size 100%
        background-repeat no-repeat
    .selection-nav
      width 100%
      ul
        padding .5rem .3rem
        height px2rem(420)
        li
          float left
          width px2rem(574)
          padding-left .4rem
          img
            width 100%
            border-radius .4rem
        p
          font-size .7rem
          height 1rem
          text-align: left
          span
            &:first-child
              float left
            &:last-child
              float right
          &:last-child
            font-size .5rem

</style>
