import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index';
import List  from '@/components/List';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '根首页',
      component: Index
    },
    {
        path: '/index',
        name: '首页',
        component: Index
    },
    {
        path: '/list',
        name: '列表页',
        component: List
    }
  ]
})
