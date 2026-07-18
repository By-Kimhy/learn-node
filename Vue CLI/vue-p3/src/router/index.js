import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import NewDetail from '../components/NewDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: '/topic/:mid',
      name: 'Home2',
      component: Home,
      props: true,
    },{
      path: '/topic/:mid/detail/:nid',
      name: 'newDetail',
      component: NewDetail,
    }
  ],
})

export default router
