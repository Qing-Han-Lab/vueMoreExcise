<!--
 * @Author: your name
 * @Date: 2020-07-13 14:46:29
 * @LastEditTime: 2020-07-30 17:16:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/dragexample/dragexample.vue
--> 
<style scoped lang='scss'>
</style>

<template>
<div class='example'>
 文字是:{{strText}}
  <Coms name="strText" :comText="strText" />
</div>
</template>

<script>
import Coms from './coms'
import mixin from '../../mixin/mixin'
export default {
  mixins : [mixin],
  data(){
    return {
      strText : '111',
    }
  },
  components:{
    Coms
  }
}
</script>