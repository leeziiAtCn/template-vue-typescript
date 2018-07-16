import  axios  from '../axios'
import Vue, { VueConstructor } from 'vue'

export const utils = {
  install (Vue: VueConstructor<Vue>) {
    Vue.prototype.$axios = axios
  }
}
