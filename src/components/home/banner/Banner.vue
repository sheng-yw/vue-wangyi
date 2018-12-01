<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item) in bannerList" :key="item.id">
        <a :href="item.targetUrl">
          <img class="swiper-slide" :src="item.picUrl" alt="">
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['bannerList'])
    },
    watch: {
      bannerList () {
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>
