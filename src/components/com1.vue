<!--
 * @Author: your name
 * @Date: 2020-07-01 16:44:32
 * @LastEditTime: 2020-07-13 16:47:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/components/com1.vue
--> 
<template>
  <div class="hello">
    com1`id is {{compInfo.id}}
    <button @click="addCount">点击</button>
    <button @click="addFunc">点击2</button>
  </div>
</template>

<script>
export default {
  name: 'com1',
  props : {
    compInfo : {
      default : ()=>{},
      type : Object
    },
    addFunc:{
      default : ()=>{},
      type : Function
    }
  },
  methods:{
    addCount(){
      this.$emit('func')
    }
  }
  /* watch:{
    compId:{
      handler(newVal){
        this.compId = newVal
      },
      deep : true
    }
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
