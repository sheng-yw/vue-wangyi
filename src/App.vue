<template>
  <div >
    <router-view />
    <Footer v-if="$route.meta.isShow"/>
  </div>
</template>

<script>
  import Footer from './components/footer/Footer.vue'
  export default {
    components: {
      Footer
    }
  }
</script>

<style scoped>

</style>
