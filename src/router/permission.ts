import type { Router } from 'vue-router'
import { getToken } from '@/utils/auth'
import useUserStore from '@/store/modules/user'
import type { CurrentUser } from '@/types/auth.type'

export function createPermissionGuard(router: Router) {
  const userStore = useUserStore()
  router.beforeEach((to, from, next) => {
    const token = getToken()
    if (!token)
      return next('/login')
    const userInfo: CurrentUser = JSON.parse(localStorage.getItem('user_info') as string)
    if (!userInfo.username) {
      // todo: 获取用户信息
    }
    if (to.name === 'login')
      return next('/')
    next()
  })
}
