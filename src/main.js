// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import iview from 'iview'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'

import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(iview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
