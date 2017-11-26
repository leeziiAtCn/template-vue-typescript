const express = require('express')
const path = require('path')
const proxy = require('http-proxy-middleware')
const compression = require('compression')
let app = express()
app.use(compression())

// 提供静态资源
app.use(express.static(path.join(__dirname, './dist')))
// 配置body-parser
// 处理application/x-www-form-urlencoded的 parser
// 设置跨域

app.use('*', proxy({
  target: 'http://192.168.1.203:9002',
  changeOrigin: true,
  // pathRewrite: path => path.replace('api', ''),
}))

app.listen(9002, function (err) {
  if (err) {
    console.log(err)
    return
  }
  let uri = 'http://localhost:' + 9002
  console.log('Listening at ' + uri + '\n')
})