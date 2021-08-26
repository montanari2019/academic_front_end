import Vue from 'vue'
import App from './App.vue'
import Router from '../src/routes/routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  Router
}).$mount('#app')
