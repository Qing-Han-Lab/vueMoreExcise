<!--
 * @Author: your name
 * @Date: 2020-07-21 21:51:00
 * @LastEditTime: 2020-07-21 23:32:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mt/Users/yangchanghao/code/vueexcise/src/views/table/table.vue
--> 
<style lang="scss" scoped>
.table {
  @extend .page;
  input {
    height: 80%;
  }
  .table-option {
    width: 100%;
    display: flex;
    height: 20px;
    border: 1px solid #eee;
    .table-option-left {
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .table-option-right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .table-option-right-item {
        margin-right: 5px;
        width: 40px;
        height: 100%;
        border: 1px solid #666;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        input {
          width: 30px;
          margin-left: 2px;
        }
        .table-option-right-item-del {
          width: 5px;
          height: 5px;
          background: red;
          border-radius: 50%;
          position: absolute;
          right: 1px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>

<template>
  <div class="table">
    <button type="primary" size="mini" @click="addTag">添加属性</button>
    <div class="table-option" v-for="(item,index) in tabList" :key="index">
      <div class="table-option-left">
        属性：
        <input type="text" v-model="item.title" />
      </div>
      <div class="table-option-right">
        <div class="table-option-right-item" v-for="(itemize,num) in item.children" :key="num">
          <input type="text" width="100" v-model="tabList[index].children[num]" />
          <div class="table-option-right-item-del" @click="delItem(num)"></div>
        </div>
        <button size="mini" type="primary" @click="addItem">添加</button>
        <button size="mini" style="margin-left:20px;" type="primary" @click="delLine(index)">删除</button>
      </div>
    </div>
    <el-table :data="getList" style="width:100%">
      <el-table-column
        v-for="(item,index) in tabList"
        :key="index"
        :label="item.title"
        :prop="item.tagName"
      ></el-table-column>
      <el-table-column v-if="tabList.length!==0" align="right">
        <template slot="header" >
          <input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</button>
          <button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
            Delete
          </button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabList: [
        //{title:'尺寸',tagName:'0',children:['10']}
      ],
      search: ''
    }
  },
  computed: {
    getList () {
      let array = [];
      if (this.tabList && this.tabList.length !== 0) {
        const len = this.tabList[0].children.length
        if (len !== 0) {
          for (let i = 0; i < len; i++) { array.push({}) }
          for (let i = 0; i < this.tabList.length; i++) {
            for (let j = 0; j < len; j++) {
              array[j][`${this.tabList[i].tagName}`] = this.tabList[i].children[j]
            }
          }
        }
      }
      //console.log(array,111)
      return array;
    }
  },
  methods: {
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    addTag () {
      let num = 0;
      if (this.tabList && this.tabList.length > 0) {
        num = this.tabList[0].children.length;
      }
      this.tabList.push({
        title: '',
        tagName: (this.tabList.length).toString(),
        children: new Array(num).fill('')
      })
    },
    addItem () {
      this.tabList.forEach((item) => {
        item.children.push('');
      })
    },
    delItem (num) {
      this.tabList.forEach((item) => {
        item.children.splice(num, 1);
      })
    },
    delLine (index) {
      this.tabList.splice(index, 1);
      this.tabList.forEach((item, num) => {
        item.tagName = num.toString();
      })
    }
  }
}
</script>

