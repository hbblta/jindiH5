import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'index',
      component: index
    },
  ]
})
