/*
 * @Author: your name
 * @Date: 2020-07-01 17:46:46
 * @LastEditTime: 2020-07-01 17:51:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/components/component.js
 */


import Vue from 'vue'

const resolve = require.context('@/components', true, /\.vue$/);

const resgin = function (resolve) {
  resolve.keys().forEach((item) => {
     const data = resolve(item).default;
     Vue.component(data.name,data)
  })
}

resgin(resolve)