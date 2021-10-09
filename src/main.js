import Vue from 'vue'
import App from './App.vue'
import VueBrazil from 'vue-brazil'
import router from '../src/routes/routes'
import store from '../src/store/store'

Vue.use(VueBrazil)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
