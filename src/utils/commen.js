/*
 * @Author: your name
 * @Date: 2020-05-25 15:54:58
 * @LastEditTime: 2020-05-29 10:28:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/utils/commen.js
 */
export default {
  install (Vue) {
    Vue.prototype.toPage = function (url, data = {}, animation = 'pop-in') { // 页面跳转
      let path = '/index.html#/' + url;
      if (Object.keys(data).length !== 0) { // 有参数，url穿参
        path += '?'
        Object.keys(data).forEach((key) => {
          path += `${key}=${data[key]}&`;
        })
        path = path.slice(0, path.length - 1);
      }
      if (window.plus) {
        let wv = window.plus.webview.create(path, url, {});
        wv.show(animation);
        wv.onclose = () => {
          console.log('page have been closed')
        }
      } else {
        this.$router.push({ path: '/'+url, query: data });
        // 或者  
        //window.location.href = path;
      }
    }
    Vue.prototype.goBack = function () { //页面返回
      if (window.plus) {
        let wv = window.plus.webview.currentWebview();
        if (wv) {
          wv.close();
        }
      } else {
        window.history.go(-1);
        // this.$router.go(-1)   this.$router.back()
      }
    }
    Vue.prototype.call = function(telNumber) { // 拨打电话
      if(window.plus){
        window.plus.device.dian(telNumber,true)
      }else{
        this.$toast('请到app内尝试!');
      }
    }
    Vue.prototype.getLocation = function(){ // 定位
      if(window.plus){
        window.plus.geolocation.getCurrentPosition(function(position){
           let city = position.address.city;
           city = city.slice(0,city.length-1);
           this.$store.commit('saveStateVal',{key:'userCity',value:city});
        },function(){
           window.plus.nativeUI.toast('获取定位服务失败');
        })
      }
    }
  }
}