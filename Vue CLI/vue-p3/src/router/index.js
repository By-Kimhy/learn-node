import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import NewDetail from '../components/NewDetail.vue'
import { dataList } from '../components/Store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
      },
    }, {
      path: '/topic/:mid',
      name: 'Home2',
      component: Home,
      props: true,
      meta: {
        title: 'Sub-Topic',
      },
    }, {
      path: '/topic/:mid/detail/:nid',
      name: 'newDetail',
      component: NewDetail,
      meta: {
        title: 'New Detail',
      },
    }
  ],
})

router.beforeEach((to, from, next) => {
  ;
  if (to.path == '/') {
    document.title = to.meta.title;
  } else {
    var title = dataList.value.filter(el => el.id == to.params.mid);
    document.title = title[0].name;
  }
  next();
})

export default router
