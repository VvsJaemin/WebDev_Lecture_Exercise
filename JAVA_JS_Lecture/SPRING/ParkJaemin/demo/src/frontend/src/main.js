import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  //전역 객체 (크리티컬 섹션 store)
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
