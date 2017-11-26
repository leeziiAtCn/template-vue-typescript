import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './static/javascripts/routers'
import ElementUI from 'element-ui'
import './static/styles/base.less'
const router: VueRouter = new VueRouter({ routes })
Vue.use(VueRouter)
Vue.use(ElementUI)
const v = new Vue({
  el: '#app',
  template: `
        <router-view></router-view>
    `,
  router
})
console.log(v)
