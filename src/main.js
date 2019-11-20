import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router'
Vue.use(vueRouter);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
