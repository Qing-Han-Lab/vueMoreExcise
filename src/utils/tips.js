/*
 * @Author: your name
 * @Date: 2020-07-16 21:16:07
 * @LastEditTime: 2020-07-16 21:19:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/utils/tips.js
 */ 
export default {
  getOptionJson(){
    return new Promise((resolve)=>{
      let data = JSON.parse(window.localStorage.getItem("optionData"));
      if(!data){
        window.localStorage.setItem("optionData","[]")
        resolve([]);
      }else{
        resolve(data);
      }
    })
  }
}