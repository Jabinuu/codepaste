import type { App } from 'vue'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { message } from 'ant-design-vue'
import {
  CloudUploadOutlined,
  CodeOutlined,
  CommentOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  StarOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons-vue'
import { createPermissionGuard } from './permission'
import useCodeStore from '@/store/modules/codes'
import { PermsEnum } from '@/types/auth.type'

// 静态路由，用户无论登录与否都可以到达的路由
export const constantRoutesMap = [{
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
  path: '/post/:id',
  name: 'post',
  component: () => import('@/views/codeDetail/index.vue'),
  meta: { codepw: '' },
  beforeEnter: async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
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
{
  path: '/:pathMatch(.*)',
  name: '404',
  component: () => import('@/views/notFound/404.vue'),
},
]

// 个人中心的动态子路由
export const individualChidRouteMap = [
  {
    name: 'info',
    path: 'info',
    component: () => import('@/views/individual/userInfo/index.vue'),
    meta: {
      role: PermsEnum.CONSTANT_ROUTES,
      title: '个人信息',
      icon: InfoCircleOutlined,
    },
  },
  {
    name: 'codes',
    path: 'codes',
    component: () => import('@/views/individual/userCode/index.vue'),
    meta: {
      role: PermsEnum.CONSTANT_ROUTES,
      title: '我的代码',
      icon: CodeOutlined,
    },
  },
  {
    name: 'comments',
    path: 'comments',
    component: () => import('@/views/individual/userComment/index.vue'),
    meta: {
      role: PermsEnum.CONSTANT_ROUTES,
      title: '我的评论',
      icon: CommentOutlined,
    },
  },
  {
    name: 'star',
    path: 'star',
    component: () => import('@/views/individual/userFavorite/index.vue'),
    meta: {
      role: PermsEnum.CONSTANT_ROUTES,
      title: '我的收藏',
      icon: StarOutlined,
    },
  },
  {
    name: 'foorprint',
    path: 'footprint',
    component: () => import('@/views/individual/userFootprint/index.vue'),
    meta: {
      role: PermsEnum.CONSTANT_ROUTES,
      title: '浏览记录',
      icon: HistoryOutlined,
    },
  },
  {
    path: 'allusers',
    name: 'allusers',
    component: () => import('@/views/individual/allUsers/index.vue'),
    meta: {
      role: PermsEnum.ALL_USERS_ROUTE,
      title: '用户管理',
      icon: UsergroupAddOutlined,
    },
  },
  {
    path: 'visitorCode',
    name: 'visitorCode',
    component: () => import('@/views/individual/visitorCode/index.vue'),
    meta: {
      role: PermsEnum.VISITOR_CODE,
      title: '游客管理',
      icon: CloudUploadOutlined,
    },
  },
]

// 动态路由，根据用户的权限码来过滤出需要添加到静态路由中的路由
export const asyncRoutesMap = [
  {
    path: '/individual',
    name: 'individual',
    redirect: '/individual/info',
    meta: {
      role: PermsEnum.CONSTANT_ROUTES,
    },
    component: () => import('@/views/individual/index.vue'),
    children: [],
  },
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutesMap,
  scrollBehavior: () => ({ top: 0 }),
})

export function setupRouter(app: App<Element>) {
  app.use(router)
  createPermissionGuard(router)
}
