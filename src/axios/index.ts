import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers['token'] = window.sessionStorage.getItem('token') || ''
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use((res: AxiosResponse) => {
  return res.data
}, err => {
  return Promise.reject(err)
})
export default axios
