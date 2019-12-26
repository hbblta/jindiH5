// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ajax from '../config/ajax'
import router from './router'
import '../config/rem'
Vue.config.productionTip = false
Vue.prototype.ajax = ajax;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
