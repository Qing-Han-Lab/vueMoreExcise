<!--
 * @Author: your name
 * @Date: 2020-07-01 16:44:32
 * @LastEditTime: 2020-07-13 16:03:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/App.vue
--> 
<template>
  <div id="app">
    <keep-alive>
     <router-view v-if="$route.meta.isKeep" />
    </keep-alive>
    <router-view v-if="!$route.meta.isKeep" />
  </div>
</template>

<script>
export default {
}
</script>


<style lang="scss">
*{margin: 0;padding :0}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
