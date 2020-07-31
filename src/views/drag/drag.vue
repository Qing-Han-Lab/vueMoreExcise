<!--
 * @Author: your name
 * @Date: 2020-07-13 10:05:30
 * @LastEditTime: 2020-07-17 11:58:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/drag/drag.vue
--> 
<style lang="scss" scoped>
.drag {
  @extend .page;
  overflow: hidden;
  display: flex;
  .drag-left {
    width: 30%;
    height: 100%;
    border-right: 1px solid #eee;
    background: #f7f7f7;
    .drag-left-model {
      width: 80%;
      height: 50%;
      display: flex;
      background: #fff;
      .drag-left-model-left {
        width: 30px;
        height: 100%;
        background: #ccc;
        cursor: pointer;
        .drag-left-model-left-item {
          width: 100%;
          text-align: right;
          text-indent: 20px;
          padding: 3px 0;
          &.active {
            background: #fff;
          }
        }
      }
      .drag-left-model-right {
        width: calc(100% - 30px);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .drag-left-model-right-content {
          width: 50px;
          height: 50px;
          margin: 5px 0;
        }
      }
    }
  }
  .drag-center {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .drag-center-phone {
      width: 120px;
      height: 200px;
      overflow: auto;
      border: 1px solid #666;
      .phone-item {
        width: 100%;
      }
    }
  }
  .drag-right{
    width: 30%;
    height: 100%;
    background: #eee;
  }
}
</style>

<template>
  <div class="drag">
    <div class="drag-left">
      <div class="drag-left-model">
        <div class="drag-left-model-left">
          <div
            @click="checkMenu(index)"
            class="drag-left-model-left-item"
            :class="{active:item.active}"
            v-for="(item,index) in menuList"
            :key="index"
          >{{item.title}}</div>
        </div>
        <div class="drag-left-model-right">
          {{getComponent[0].title}}
          <vuedraggable
            :group="{ name: 'people', pull: 'clone', put: false }"
            v-model="getComponent"
          >
            <div
              :key="`A${index}`"
              class="drag-left-model-right-content"
              v-for="(item,index) in getComponent"
              :style="{background:item.color}"
            >{{item.content}}</div>
          </vuedraggable>
        </div>
      </div>
    </div>
    <div class="drag-center">
        <vuedraggable class="drag-center-phone" v-model="myList" group="people">
          <div @click="checkModel(index)" class="phone-item" v-for="(item,index) in myList" :key="`B${index}`">
            <component :is="item.name" :data="item"></component>
          </div>
        </vuedraggable>
    </div>
    <div class="drag-right">
     <component :is="optionName" :data="optionData" ref="setter"></component>
     <div class="drag-buttons">
       <button @click="saveSetting">保存</button>
       <button @click="del">删除</button>
     </div>
    </div>
  </div>
</template>

<script>
import vuedraggable from "vuedraggable"
import Title from './components/title'
import Content from './components/content'
import Downbar from './components/downbar'

import Topmodel from './options/titlemodel'
import Middlemodel from './options/middlemodel'
import Downmodel from './options/downmodel'

import Tips from '../../utils/tips'

export default {
  data () {
    return {
      optionName : '', // 配置组件名称
      optionData : null, // 配置组件数据
      menuList: [ // 左侧组件库
        {
          title: '顶部',
          name: 'Title',
          content: '顶部content',
          active: true,
          color: 'red',
          opName : 'Topmodel'
        },
        {
          title: '内容',
          name: 'Content',
          content: '内容content',
          active: false,
          color: 'green',
          opName : 'Middlemodel'
        },
        {
          title: '底部',
          name: 'Downbar',
          content: '底部content',
          active: false,
          color: 'orange',
          opName : 'Downmodel'
        }
      ],
      phoneList : [] // 手机里展示的组件
    }
  },
  created () {
    Tips.getOptionJson().then(res => {
      this.$store.commit('updateList',res)
    })
  },
  components: {
    vuedraggable,
    Title,
    Content,
    Downbar,
    Topmodel,
    Middlemodel,
    Downmodel
  },
  computed: {
    getComponent () {
      const comp = this.menuList.find((item) => { return item.active })
      return [comp]
    },
    myList: { // 手机显示组件数组
      get () {
        return this.$store.state.myList
      },
      set (value) {
        let nameList = {},flag = false;
        value.forEach((item)=>{
         if(!nameList[item.name]){
           nameList[item.name]=true;
         }else{
           flag = true;
         }
        })
        if(!flag){this.$store.commit('updateList', value)}
      }
    }
  },
  methods: {
    checkMenu (index) {
      this.menuList = this.menuList.map((item, num) => {
        item.active = false;
        if (index === num) item.active = true;
        return item;
      })
    },
    checkModel(index){
      this.optionName = this.myList[index].opName
      this.optionData = this.myList[index]
    },
    del(){
      const index = this.myList.findIndex((item)=>{return item.opName===this.optionName});
      this.myList.splice(index,1);
      console.log(this.myList,'del ok')
    },
    saveSetting(){
      const comp = this.$refs.setter;
      if(comp){
        comp.save();
      }
    }
  }
}
</script>

