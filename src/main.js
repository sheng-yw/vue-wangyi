import Vue from 'vue'

import './mock/mock'
import App from './App.vue'
import router from './router'
import store from './store/store'

new Vue({
  //渲染数据的区域
  el: '#app',
  //要进行渲染的模板函数  相当于 template  components组合
  render: h => h(App),
  router,
  store
})
