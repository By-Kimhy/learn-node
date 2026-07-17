import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Item from '../components/Item.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue'),
    },{
      path: '/item/:id',
      name: 'item',
      component: Item,
      // can pass props to this component
      props: true,
    },
    //redirect
    {
      path: '/all-item',
      redirect: '/',
    },

    // catch all route
    // 404 Not Found
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../components/NotFound.vue'),
    },
  ],
})

export default router
