<!--
 * @Author: your name
 * @Date: 2020-07-13 14:19:55
 * @LastEditTime: 2020-07-17 14:44:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/drag/components/content.vue
--> 
<!--
 * @Author: your name
 * @Date: 2020-07-13 14:17:17
 * @LastEditTime: 2020-07-13 14:19:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/drag/components/title.vue
--> 
<style lang="scss" scoped>
 .content{
   width: 100%;
   height: 120px;
   background: green;
   display: flex;
   justify-content: center;
   align-items: center;
   .content-box{
     width: 80%;
     height: 40px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     .content-box-img{
       width: 40px;
       height: 40px;
       margin-right: 5px;
       background: #eee;
       img{width: 100%; height: 100%;}
     }
     .content-box-container{
       flex: 1;
       height: 100%;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: flex-start;
       .money{
         color: orange;
       }
     }
   }
 }
</style>

<template>
  <div class="content">
    <div class="content-box">
      <div class="content-box-img">
        <img :src="getItem.imgUrl" alt="">
      </div>
      <div class="content-box-container">
        {{getItem.productName}}
        <div class="money">￥{{getItem.productPrice}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'content',
  props : ['data'],
  data(){
    return {
      options : null
    }
  },
  created(){
   this.myList = this.myList.map((item)=>{
     if(item.name===this.data.name){
       if(item.params){ // 有值了，赋值
        this.options = item.params;
       }else{ // 没有，初始化
         item.params = {};
         item.params.imgUrl = ''
         item.params.productName = ' '
         item.params.productPrice = ''
         this.options = item.params;
       }
     }
     return item;
   })
  },
  computed:{
    myList : {
      get(){return this.$store.state.myList},
      set(val) {this.$store.commit('updateList',val)}
    },
    getItem(){
      let model = null;
      this.myList.forEach((item)=>{
        if(item.name===this.data.name){
          model = item.params;
        }
      })
      return model;
    }
  }
}
</script>

