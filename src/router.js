import Router from 'vue-router'
Vue.use(Router)

import Home from './views/Home.vue'
import Page1 from './views/Page1'
import Page1of2 from './views/Page1-2'
import Page2 from './views/Page2'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
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
