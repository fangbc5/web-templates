import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/utils/axios'
import './components/third/element-ui'

//导入全局配置
import './assets/global_config'
import './assets/global_style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
