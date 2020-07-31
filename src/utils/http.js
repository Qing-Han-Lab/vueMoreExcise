/*
 * @Author: your name
 * @Date: 2020-07-01 17:10:17
 * @LastEditTime: 2020-07-01 17:17:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/utils/http.js
 */ 


 import axios from 'axios'

 axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(window.localStorage.getItem('token')){
    config.headers.token = 'ych_token'
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const fetch = function(method,url,data={}){
  const axiosParam = {
    method : method,
    url : url,
    headers: {'Content-Type': 'application/jsont'},
    timeout: 1000
  }
  if(method.toLocaleUpperCase()==='GET'){
   axiosParam.params = data;
  }else{
   axiosParam.data = data;
  }
  return new Promise((resolve,reject)=>{
    axios(axiosParam).then(res => {
      resolve(res)
    }).catch(err =>{
      reject(err)
    })
  })
}

export default fetch;