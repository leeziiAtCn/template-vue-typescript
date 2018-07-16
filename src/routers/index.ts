import Router, { RouteConfig } from 'vue-router'
import Layout from '../layout/index.vue'
import Home from '../pages/home/index.vue'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  }
]
export const router: Router = new Router({
  routes
})
