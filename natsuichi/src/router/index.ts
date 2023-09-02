import { createRouter, createWebHistory } from 'vue-router'
import comicPage from '../pages/comics/index.vue'
import homePage from '../pages/home/index.vue'
import workPage from '../pages/work/index.vue'
import comicPreviewPage from '../pages/comics/[id].vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/comics',
      name: 'comics',
      component: comicPage
    },
    {
      path: '/comics/:id',
      name: 'comic',
      component: comicPreviewPage,
      props: route => ({ id: route.params.id.toString() })
    },
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/work',
      name: 'work',
      component: workPage
    },
  ]
})

export default router
