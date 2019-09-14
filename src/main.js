import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './util/routes.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')