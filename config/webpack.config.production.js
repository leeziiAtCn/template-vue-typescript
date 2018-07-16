const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        {
          path: '//cdn.bootcss.com/vue/2.5.16/vue.min.js',
          type: 'js'
        },
        {
          path: '//cdn.bootcss.com/axios/0.18.0/axios.min.js',
          type: 'js'
        },
        {
          path: '//cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
          type: 'js'
        },
        {
          path: '//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
          type: 'js'
        },
        {
          path: '//cdn.bootcss.com/element-ui/2.4.0/index.js',
          type: 'js'
        }
      ],
      append: false,
      publicPath: ''
    })

  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'axios': 'axios',
    'vuex': 'Vuex'
    // 'element-ui': 'ELEMENT'
  }
}
