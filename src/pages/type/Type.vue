<template>
  <div>
    <Header/>
    <div class="type-wrap">
      <div class="left-wrap">
        <ul class="left-ul">
          <li><a href="javascript:;">推荐专区</a></li>
          <li><a href="javascript:;">夏季专区</a></li>
          <li><a href="javascript:;">个性专区</a></li>
          <li><a href="javascript:;">居家</a></li>
          <li><a href="javascript:;">配件</a></li>
          <li><a href="javascript:;">服装</a></li>
          <li><a href="javascript:;">电器</a></li>
          <li><a href="javascript:;">洗护</a></li>
          <li><a href="javascript:;">饮食</a></li>
          <li><a href="javascript:;">餐厨</a></li>
          <li><a href="javascript:;">婴童</a></li>
          <li><a href="javascript:;">文体</a></li>
          <li><a href="javascript:;">特色区</a></li>
        </ul>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>

  import Header from '../../components/header/TypeHeader.vue'
  export default {
    data(){

    },
    async mounted(){
      this.$store.dispatch('getTypeData');

    },
    components:{
      Header
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
      width px2rem(161)
      height 100%
      background #fff
      font-size .6rem
      .left-ul
        padding-top .2rem
        li
          padding-top .6rem
          a
            height px2rem(55)
            line-height px2rem(55)
            text-align: center
            display block
</style>
