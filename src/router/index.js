/*
 * @Author: your name
 * @Date: 2020-07-01 16:44:32
 * @LastEditTime: 2020-07-13 16:02:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/router/index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'layout',
    component: ()=>import('@/views/layout/layout.vue'),
    redirect : '/first',
    meta : {
      isKeep : true
    },
    children : [
      {
        path : '/first',
        name : 'first',
        component: ()=>import('@/views/layout/first.vue'),
        meta : {
          isKeep : true
        }
      },
      {
        path : '/second',
        name : 'second',
        component: ()=>import('@/views/layout/second.vue'),
        meta : {
          isKeep : true
        }
      }
    ]
  }
]

const resolve = require.context('@/views',true,/\.json$/);

const analys = function(resolve){
  resolve.keys().forEach((item)=>{
    let path = resolve(item).page;
    const routeItem = {
      path : '/'+path.split('/').pop(),
      name : path.split('/').pop(),
      meta:{
        isKeep : false
      },
      component : ()=>import(`@/views/${path}.vue`)
    }
    routes.push(routeItem)
  })
}

analys(resolve)


const router = new VueRouter({
  routes
})

export default router
