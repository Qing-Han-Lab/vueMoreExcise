<!--
 * @Author: your name
 * @Date: 2020-07-16 21:07:39
 * @LastEditTime: 2020-07-17 11:39:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/drag/options/middlemodel.vue
--> 
<style scoped lang='scss'>
.middelmodel{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
 .middelmodel-uppic{
   width: 50px;
   height: 50px;
   background: #ccc;
   position: relative;
   text-align: center;
   line-height: 50px;
   font-size: 25px;
   img{
     width: 100%;
     height: 100%;
     position: absolute;
     top: 0;
     left: 0;
     z-index: 5;
   }
 }
 
}
</style>

<template>
<div class='middelmodel'>
  <div class="middelmodel-uppic" @click="upImg">+
    <img :src="options.imgUrl" alt="">
  </div>
  <p>请填写名称</p>
  <input type="text" v-model="options.productName">
  <p>请填写价格</p>
  <input type="text" v-model="options.productPrice">
</div>
</template>

<script>
export default {
  props : ['data'],
  data(){
    return {
      options : null
    }
  },
  created(){
   const item = this.myList.find((op)=>{return op.name===this.data.name});
   if(item.params){
     this.options = item.params;
   }
  },
  computed:{
    myList : {
      get(){return this.$store.state.myList},
      set(val) {this.$store.commit('updateList',val)}
    }
  },
  methods:{
    upImg(){
     let input = document.createElement('input');
     input.type = 'file';
     input.style.opacity = '0';
     document.body.appendChild(input);
     input.onchange = (e)=>{
       const file = e.target.files[0];
       let url = window.URL.createObjectURL(file);
       document.body.removeChild(input);
       this.options.imgUrl = url;
     }
     input.click();
    },
    save () {
      debugger;
      window.localStorage.setItem('optionData', JSON.stringify(this.myList));
    }
  }
}
</script>