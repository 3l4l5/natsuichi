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
      component: comicPage,
      meta: { title: 'ナツイチのまんが' }
    },
    {
      path: '/comics/:id',
      name: 'comic',
      component: comicPreviewPage,
      props: route => ({ id: route.params.id.toString() }),
      meta: { title: 'ナツイチのまんが' }
    },
    {
      path: '/',
      name: 'home',
      component: homePage,
      meta: { title: 'ナツイチのホームページ' }
    },
    {
      path: '/work',
      name: 'work',
      component: workPage,
      meta: { title: 'ナツイチにれんらく' }
    },
  ]
})

router.afterEach((to) => {
  const DEFAULT_TITLE = 'ナツイチのホームページ'
  const title: string = to.meta.title as string
  document.title = title ? title : DEFAULT_TITLE
})

export default router
