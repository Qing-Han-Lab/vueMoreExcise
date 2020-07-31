<!--
 * @Author: your name
 * @Date: 2020-07-01 17:34:27
 * @LastEditTime: 2020-07-20 17:21:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/othder/othder.vue
--> 
<!--
 * @Author: your name
 * @Date: 2020-07-01 17:27:19
 * @LastEditTime: 2020-07-01 17:35:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/layout/first.vue
--> 
<style lang="scss" scoped>
.other{
  @extend .page;
  @import "./other.scss";
  background: #f7f7f7;
}
</style>


<template>
  <div class="other">
   other
   <div class="redText">{{count}}</div>
   <com1 :compInfo="getId" @func="add" :addFunc="add"></com1>
   <div>{{getCount}}</div>
   <button>呵呵</button>
   <quill-editor v-model="val"></quill-editor>
  </div>
</template>

<script>
//import QuillEditor from 'vue-quill-editor'
import a from '../../utils/urlconst'
export default {
  data(){
    return{
      val : '<div>呵呵<p style="color:red;">???</p></div>',
      count : 1,
      info: {id:'111'}
    }
  },
  created(){
    const aa = require('../../utils/urlconst')
    console.log(a,aa,'hehe')
    setTimeout(() => {
      this.info.id = '222'
    }, 1000);
    window.setValue = ()=>{
      this.setVal()
    }
  },
 /*  components:{
    QuillEditor
  }, */
  computed:{
    getId(){
      return this.info
    },
    getCount:{
      set(val){
        debugger
        this.count=val
      },
      get(){return this.count}
    }
  },

  methods:{
    add(){
      this.count++;
    },
    setVal(){
      this.getCount = 'hello ych ';
    }
  }
}
</script>