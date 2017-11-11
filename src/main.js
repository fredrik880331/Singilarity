// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import navbar from '@/components/navbar'
import thumbnail from '@/components/thumbnail'
import page from '@/components/page'
Vue.component('navbar',navbar);
Vue.component('thumbnail',thumbnail);
Vue.component('page',page);


import jQuery from 'jquery'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

export const bus = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
