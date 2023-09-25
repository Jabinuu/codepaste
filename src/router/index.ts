import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { message } from 'ant-design-vue'
import { createPermissionGuard } from './permission'
import useCodeStore from '@/store/modules/codes'

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
      redirect: '/individual/info',
      component: () => import('@/views/individual/index.vue'),
      children: [
        {
          name: 'info',
          path: 'info',
          component: () => import('@/views/individual/userInfo/index.vue'),
        },
        {
          name: 'codes',
          path: 'codes',
          component: () => import('@/views/individual/userCode/index.vue'),
        },
        {
          name: 'comments',
          path: 'comments',
          component: () => import('@/views/individual/userComment/index.vue'),
        },
        {
          name: 'star',
          path: 'star',
          component: () => import('@/views/individual/userFavorite/index.vue'),
        },
        {
          name: 'foorprint',
          path: 'footprint',
          component: () => import('@/views/individual/userFootprint/index.vue'),
        },
      ],
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('@/views/codeDetail/index.vue'),
      meta: { codepw: '' },
      beforeEnter: async (to, from, next) => {
        const isFromEncrypt = from.name === 'encrypt'
        const codeStore = useCodeStore()
        const verifyCodepw = async (codeId: string, codepw: string) => {
          try {
            return await codeStore.verifyCodepw({
              codeId,
              codepw,
            })
          }
          catch (e: any) {
            if (isFromEncrypt) {
              message.error(e)
              return false
            }
          }
        }

        if (isFromEncrypt)
          to.meta.codepw = from.meta.codepw
        const { encrypt, codeId } = await codeStore.getDetailById(to.params.id as string)
        if (encrypt && !await verifyCodepw(codeId, to.meta.codepw as string))
          return next(`/encrypt/${to.params.id}`)
        return next()
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/login/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/register/register.vue'),
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('@/views/auth/forget/forget.vue'),
    },
    {
      path: '/encrypt/:id',
      name: 'encrypt',
      component: () => import('@/views/codeEncrypt/index.vue'),
      meta: { codepw: '' },
    },
    {
      path: '/',
      redirect: 'add',
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export function setupRouter(app: App<Element>) {
  app.use(router)
  createPermissionGuard(router)
}
