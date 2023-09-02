import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import comicPage from '../pages/comics/index.vue'
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
    }
  ]
})

export default router
