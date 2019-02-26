import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueTest from '@/components/VueTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'HelloWorld', component: HelloWorld
    }, {
      path: '/vuetest', name: 'VueTest', component: VueTest
    }
  ]
})
