import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/add',
      name: 'add',
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
    {
      path: '/individual',
      name: 'individual',
      component: () => import('@/views/individual/index.vue'),
      children: [
        {
          path: 'info',
          component: () => import('@/views/individual/userInfo/index.vue'),
        },
        {
          path: 'codes',
          component: () => import('@/views/individual/userCode/index.vue'),
        },
        {
          path: 'comments',
          component: () => import('@/views/individual/userComment/index.vue'),
        },
        {
          path: 'star',
          component: () => import('@/views/individual/userFavorite/index.vue'),
        },
        {
          path: 'footprint',
          component: () => import('@/views/individual/userFootprint/index.vue'),
        },
      ],
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('@/views/codeDetail/index.vue'),

    },
    {
      path: '/',
      redirect: 'add',
    },
  ],
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
