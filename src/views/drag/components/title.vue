<!--
 * @Author: your name
 * @Date: 2020-07-13 14:17:17
 * @LastEditTime: 2020-07-17 14:43:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/drag/components/title.vue
--> 
<style lang="scss" scoped>
.title {
  width: 100%;
  height: 120px;
  background: red;
}
</style>

<template>
  <div class="title">
    <p>{{getItem.title}}</p>
    <div>
      <span v-for="(item,index) in getItem.tagList" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'title',
  props: ['data'],
  data () {
    return {
      options: null
    }
  },
  created () {
    //console.log(this.data,this.myList)
    this.myList.forEach((item) => {
      if (item.name === this.data.name) {
        if (item.params) { // 有值
          this.options = item.params;
        } else { // 刚拉进来的,初始化配置项
          item.params = {};
          item.params.title = '';
          item.params.tagList = ['', '', '', ''];
          this.options = item.params;
        }
      }
    })
  },
  computed: {
    myList: {
      get () {
        return this.$store.state.myList
      },
      set (val) {
        this.$store.commit('updateList', val)
      }
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
  },
  methods: {

  }
}
</script>

