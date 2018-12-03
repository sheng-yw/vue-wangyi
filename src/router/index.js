import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Home.vue'
import Cart from '../pages/cart/Cart.vue'
import Personal from '../pages/personal/Personal.vue'
import Type from '../pages/type/Type.vue'
import Distinction from '../pages/distinction/Distinction.vue'
import TypeDetail from '../pages/type/type-detail/TypeDetail.vue'

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/home',
      component:Home,
      meta: {
        isShow: true
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta: {
        isShow: true
      }
    },
    {
      path:'/type',
      component:Type,
      children:[
        {
          path:'/type/detail/:id',
          component: TypeDetail,
          meta: {
            isShow: true
          }
        }
      ],
      meta: {
        isShow: true
      }
    },
    {
      path:'/personal',
      component:Personal,
      meta: {
        isShow: false
      }
    },
    {
      path:'/distinction',
      component:Distinction,
      meta: {
        isShow: true
      }
    },
    {
      path:'/',
      redirect: '/home'
    },
  ]
})
