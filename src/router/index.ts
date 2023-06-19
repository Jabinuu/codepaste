import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/addSharing/index.vue'),
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('@/views/introduction/index.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('@/views/community/index.vue'),
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('@/views/questions/index.vue'),
    },
  ],
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
