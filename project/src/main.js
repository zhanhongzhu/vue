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
