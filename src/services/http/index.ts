import { message } from 'ant-design-vue'
import axios from 'axios'
import nprogress from 'nprogress'
import { router } from '@/router'
import { getToken } from '@/utils/auth'
import 'nprogress/nprogress.css'
import { downloadFile } from '@/utils/download'
import { userLogout } from '@/hooks/useAuth'

const defHttp = axios.create({
  baseURL: '/api',
  timeout: 3000,
})

// 请求拦截器
defHttp.interceptors.request.use((config) => {
  const { token, refreshToken } = getToken()
  if (token) {
    config.headers.Authorization = token
    config.headers.__authorization = refreshToken
  }

  nprogress.configure({ showSpinner: false })
  nprogress.start()

  return config
})

// 响应拦截器
defHttp.interceptors.response.use(async (response) => {
  nprogress.done()
  const { data } = response

  if (data instanceof Blob)
    return downloadFile(response)

  /*
    当刷新token过期再发起请求时，循环：
        登录信息过期（接口请求）
        刷新token过期（获取新token请求）

  */
  if (data.code === '10009') {
    // 更新短效token
    const useUserStore = await import('@/store/modules/user')
    const userStore = useUserStore.default()

    await userStore.updateToken()
    // 如果刷新token也失效了 则登出
    if (userStore.token === '') {
      router.push('/login')
      userLogout()
      return data
    }

    await userStore.getUserInfoAction()
    // 重新发起请求
    const res = await defHttp.request(response.config)

    return res
  }
  return data
}, (err) => {
  message.error('请求失败! 请检查网络设置')
  return err
})

export default defHttp
