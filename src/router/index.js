import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Home.vue'
import Cart from '../pages/cart/Cart.vue'
import Personal from '../pages/personal/Personal.vue'
import Type from '../pages/type/Type.vue'
import Distinction from '../pages/distinction/Distinction.vue'

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/type',
      component:Type
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/distinction',
      component:Distinction
    },
    {
      path:'/',
      redirect: '/home'
    },
  ]
})
