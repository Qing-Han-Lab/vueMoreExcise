<!--
 * @Author: your name
 * @Date: 2020-07-01 17:27:19
 * @LastEditTime: 2020-07-01 17:35:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/layout/first.vue
--> 
<style lang="scss" scoped>
.first{
  @extend .page;
  background: pink;
}
</style>


<template>
  <div class="first">
    first
    <button @click="toPage('other')" >去othder</button>
  </div>
</template>

<script>
export default {
}
</script>