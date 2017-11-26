import layout from '../../../layout/index.vue'
import home from '../../../page/home/index.vue'
import test from '../../../page/test/index.vue'
import { RouteConfig } from 'vue-router'
export const routes: RouteConfig[] = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: home
      },
      {
        path: '/test',
        component: test
      }
    ]
  }
]
