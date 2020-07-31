<!--
 * @Author: your name
 * @Date: 2020-07-16 21:07:03
 * @LastEditTime: 2020-07-17 14:22:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/drag/options/titlemodel.vue
--> 
<style scoped lang='scss'>
.titlemodel {
}
</style>

<template>
  <div class="titlemodel">
    <span>请设置标题名称</span>
    <input type="text" v-model="options.title" />
    <br />
    <span>请设置标签名称</span>
    <p v-for="(item,index) in options.tagList" :key="index">
      <input type="text" v-model="options.tagList[index]" />
    </p>
    <button @click="getList">查看</button>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      options : null
    }
  },
  created () {
    this.myList = this.myList.map((item) => {
      if (item.name === this.data.name) {
        if (item.params) {
          this.options = item.params;
        }
      }
      return item;
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
    }
  },
  methods: {
    getList(){
     console.log(this.myList,'???');
    },
    save () {
      window.localStorage.setItem('optionData', JSON.stringify(this.myList));
    }
  }
}
</script>