/*
 * @Author: your name
 * @Date: 2020-07-01 16:44:32
 * @LastEditTime: 2020-07-14 10:32:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/store/index.js
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
import usermodel from './usermodel/usermodel'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 1,
    myList : []
  },
  mutations: {
    add(state,num){
     state.count+=num
    },
    updateList(state,val){
      state.myList = val
    }
  },
  actions: {
  },
  modules: {
    usermodel
  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
})
