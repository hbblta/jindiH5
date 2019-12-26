import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import sign from '../components/sign'
import signUp from '../components/signUp'
import tickets from '../components/tickets'
import seckill from '../components/seckill'

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: tickets
    },
    {
      path: '/seckill',
      name: 'seckill',
      component: seckill
    },
  ]
})
