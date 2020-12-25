import Vue from 'vue'
import App from './App.vue'

// 如下两个是网络的请求组件
import VueAxios from "vue-axios";
import axios from 'axios'

// ElmentUI的组件
import ElementUI from 'element-ui'
// ElementUI的样式
import 'element-ui/lib/theme-chalk/index.css'

import MyComponent from "./components/MyComponent";
Vue.use(MyComponent)

// moment组件
// import moment from 'moment'
// //使用moment组件
// Vue.use(moment)

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

// 设置基础的url地址
axios.defaults.baseURL = 'http://localhost:8081'

Vue.config.productionTip = false

import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
