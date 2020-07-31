<!--
 * @Author: your name
 * @Date: 2020-07-01 17:27:28
 * @LastEditTime: 2020-07-01 17:58:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/layout/second.vue
--> 
<style lang="scss" scoped>
.second{
  @extend .page;
  background: yellow;
}
</style>


<template>
  <div class="second">
    {{key}}
    {{$store.state.count}}
    {{$store.state.usermodel.name}}
    <button @click="$store.commit('add',1)">+1</button>
  </div>
</template>

<script>
import mixin from '../../mixin/mixin'
export default {
  mixins : [mixin]
}
</script>