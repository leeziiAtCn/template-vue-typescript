import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './routers'
import { utils } from './utils'
import './less/reset.less'
Vue.use(VueRouter)
Vue.use(utils)
const vue: Vue = new Vue({
  el: '#app',
  router
})
