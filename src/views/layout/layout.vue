<!--
 * @Author: your name
 * @Date: 2020-07-01 16:52:14
 * @LastEditTime: 2020-07-13 16:11:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/layout/layout.vue
--> 
<style lang="scss" scoped>
 .layout{
   @extend .page;
   display: flex;
   flex-direction: column;
   .layout-top{
     flex: 1;
     width: 100%;
     position: relative;
   }
   .layout-down{
     width: 375px;
     height: 60px;
     display: flex;
     .layout-down-item{
       box-sizing: border-box;
       flex: 1;
       height: 100%;
       text-align: center;
       line-height: 60px;
       @include cssborder(1px,solid,#000);
     }
   }
 }
</style>
<template>
  <div class="layout">
    <div class="layout-top">
     <router-view :key="key"></router-view>
    </div>
    <div class="layout-down">
      <div @click="toPage(item.name)" class="layout-down-item" v-for="(item,index) in menu" :key="index">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      menu : [{name:'first'},{name:'second'}]
    }
  },
  watch:{
    $route:{
      handler(){
        //console.log(val)
      },
      deep : true
    }
  },
  beforeRouteEnter(to,from,next){
    console.log(to,from);
    next((vm)=>{
      console.log(vm,111)
    })
  },
  activated(){
    console.log(this)
  },
  created(){
    console.log(this.$route,'layout')
  },
  computed:{
    key(){
      return this.$route.path
    }
  },
  methods : {

  }
}
</script>


