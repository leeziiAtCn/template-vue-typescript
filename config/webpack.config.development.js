const ip = require('ip')

module.exports = {
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    noInfo: false,
    compress: true,
    host: ip.address(),
    port: 8082,
    disableHostCheck: true,
    // proxy: {
    //   'api/*': {
    //     target: 'http://hgbl.*.com/',
    //     changeOrigin: true,
    //     secure: false
    //   }
    // }
  },
}
