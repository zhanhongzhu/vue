用vue做一个简单的网站；
具体流程；

用cli新建一个项目；
1、安装vue-cli至全局

   npm install -g vue-cli

2、使用vue-cli初始化项目：

    vue init webpack demo   

3.安装依赖：

  npm install

4.运行项目：

  npm run dev

在src下面的操作：
新建common文件夹

common/css/common.css 存放公共样式
新建conponents文件夹

新建header.vue 组件
新建footer.vue 组件
新建pages文件夹

存放新建的各种页面；
index.vue
在main.js 里面的配置；

    // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import index from './pages/index'
import ElementUI from 'element-ui'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

// axios.defaults.baseURL ='https://a.kissneck.com.cn/bbyl/public/v1/';
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(index)
})

注：render: h => h(index)可以定义入口页面
在router/index.js里面的配置；

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'

import '@/common/css/common.css'
import '@/common/css/index.css'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/index', name: 'index', component: index }
  ]
})

在页面script里面引入组件；index.vue页面；

import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

export default {
name: 'contact-us',
data() {
return {
  list: []
}
},
mounted: function() {
var that = this;
that.getData();
 },
methods: {
getData() {
  var that = this;
  that.$axios.get('https://api.it120.cc/fashion/banner/list').then(response => {
    console.log(response.data.data)
    that.list = response.data.data;
  }).catch((error) => {

  })
},
  },
 components: { 'v-header': header, 'v-footer': footer }
}
