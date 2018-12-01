<template>
  <div class="good-things">
    <h2 class="good-title">{{goodType.name}}</h2>
    <ul class="good-list">
      <li class="good-item" v-for="(item,index) in goodType.itemList" :key="item.id" v-if="index<7">
        <a href="javascript:;">
          <div class="good-img">
            <img :src="item.listPicUrl" alt="">
          </div>
          <p class="good-info">{{item.simpleDesc}}</p>
          <p class="good-name">{{item.name}}</p>
          <p class="good-price">￥{{item.retailPrice}}</p>
        </a>
      </li>
      <li class="good-item good-more">
        <div class="good-info">
          <a href="javascript:;">
            <p>更多居家好物</p>
            <i class="good-more-img"></i>
          </a>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      goodType: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .good-things
    padding 1rem .2rem 0
    .good-title
      text-align: center
      font-size .8rem
    .good-list
      font-size 0
      padding .5rem 0
      .good-item
        display inline-block
        vertical-align middle
        margin .2rem .2rem
        width 47%
        height px2rem(534)
        .good-img
          background #F4F4F4
          img
            width 100%
            height 100%
        p
          padding .4rem 0
          font-size .7rem
          ellipse()
          &.good-info
            background #F1ECE2
          &.good-name
            padding .4rem 0 .1rem
          &.good-price
            padding 0

        &.good-more
          text-align: center
          .good-info
            height 77.5%
            line-height 7rem
            background #F4F4F4
            a
              display block
              width 100%
              height 100%
              p
                height 4rem
              .good-more-img
                width px2rem(66)
                height px2rem(66)
                display block
                background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkiFXSYAAAAVdFJOUwDm8Za4KQn7bBFG18herTkZBHyKTt6+JaAAAAIfSURBVFjDtVjbgqsgDCzXgHhB6/z/ry7a3XPUYg0uy0MfsA4hyUwSH4+/XOPglA6SQDJo5YaxFMA7LbFfUjtfgND0lF4KyjXGj4/Rm8apkHaob5gIc5v+rbt42I6dTsjtzEAwCUFMMfssTiKhmAsE+yQId+6+0QnQ014ZoT57zqvPpswSYbi87RAgT73SEXpO+HwP6vKPHDAxQzcBLmvFyf7ZeRlLZiqAWEDozSdG4lnEhifkITo2oC+kVI9gD6jCF2KkY3eWG6KhWBwGou1tWqgbCqPQbmJSfpM11wTmjRnultS5/4Y0EPYWhhVo/kVpetxb009GeKJ4eWJeBCOR/76VvtR4fUJU/e1Jje4XRF3Pt4TIImrOaRG0hGNAYMWRsqQMGNYTeDnaZUHUekfFTbCkMCpzR7W6dGZmQyPRH8vGvDo1wLCZ+g5iVm9K8PmWQLQ9BEakX0JBV2AE2h2IhUy/wHYP1yv4/QtvdjAwpH+zo8Qfi0P2xfblj4K4LNE9+PQVF35+rAV5zOUHO08X3ql8nnL5svB/OuELk7ejykrIi7c8/RjzPYd/6QdLx6yGbM51jKOnvoUcPukpQ9c1hPmo64z6YnT8XF+q1Lka9bZK3a/Rf1Tpg1I/Fn7bj1XpC2v0p1X65Cr9epW5ocr8UmWOStEJVxPfOjUGcz1XnqPY67myynxbZ84+zPvR35r363x32H7/SC+Le98/itYXKn4o0mvBsDUAAAAASUVORK5CYII=")
                background-size 100%
                margin 0 auto
                background-repeat no-repeat

</style>
