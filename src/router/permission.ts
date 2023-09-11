import type { Router } from 'vue-router'
import { message } from 'ant-design-vue'
import type { JointContent } from 'ant-design-vue/es/message/interface'
import useUserStore from '@/store/modules/user'
import { store } from '@/store'
import { userLogout, whiteList } from '@/hooks/useAuth'

export function createPermissionGuard(router: Router) {
  const userStore = useUserStore(store)

  router.beforeEach(async (to, from, next) => {
    const token = userStore.getToken()

    if (!token) {
      // 白名单中的路由无须身份认证，直接放行
      if (whiteList.includes(to.path) || to.path.startsWith('/post'))
        return next()
      else
        return next(`/login?redirect=${from.path}`)
    }
    // 已登录便不允许访问login
    if (to.path === '/login')
      return next('/')

    // 存在token但没有用户信息
    if (!userStore.getUserInfo()) {
      try {
        // 发起请求获得userinfo 然后存入store并持久化存储
        await userStore.getUserInfoAction()
      }
      // 用promise的reject触发catch
      catch (e) {
        message.error(e as JointContent)
        userLogout()
        return next(`/login?redirect=${to.path}`)
      }
    }
    next()
  })
}
