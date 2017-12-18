import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index'
import Page1 from '@/components/page1'
import Page1of2 from '@/components/page1-2'
import Page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page1/2',
      name: 'Page1_2',
      component: Page1of2
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
