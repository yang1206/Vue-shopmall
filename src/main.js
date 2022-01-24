import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import toast from '@/components/common/toast'
import 'font-awesome/css/font-awesome.min.css' 
Vue.config.productionTip = false
//添加事件总线事件
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//使用懒加载
Vue.use(VueLazyload,{
  loading: require('./assets/img/common/placeholder.png')
})

//解决移动端300毫秒延迟
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
