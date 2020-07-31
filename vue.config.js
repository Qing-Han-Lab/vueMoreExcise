/*
 * @Author: your name
 * @Date: 2020-07-01 16:57:01
 * @LastEditTime: 2020-07-01 17:01:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/vue.config.js
 */
module.exports = {
  publicPath: './',
  outputDir: 'demo',
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://t.weather.sojson.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css : {
    loaderOptions : {
      sass : { // 全局sass
        prependData : `@import "@/style/index.scss";`
      }
    }
  }
}
