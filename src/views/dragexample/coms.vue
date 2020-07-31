<!--
 * @Author: your name
 * @Date: 2020-07-23 11:43:56
 * @LastEditTime: 2020-07-23 11:55:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/dragexample/coms.vue
--> 
<style scoped lang='scss'>
</style>
<template>
<div class='coms'>
  <input type="text" v-model="comText" @input="changeInput">
</div>
</template>

<script>
export default {
  props : ['comText','name'],
  methods:{
    changeInput(){
      this.$parent[this.name] = this.comText;
    }
  }
}
</script>