import { message } from 'ant-design-vue'
import useUserStore from '@/store/modules/user'
import { deleteToken, deleteUserInfoLocal } from '@/utils/auth'

export function userLogout() {
  const userStore = useUserStore()
  userStore.initUserInfo()
  userStore.initToken()
  deleteToken()
  deleteUserInfoLocal()
  message.info('已退出登录!')
}

// 白名单：不需要登录认证即可放行的路由
export const whiteList = ['/login', '/register', '/forget', '/add', '/', '/introduction', '/community', '/questions', '/post']
