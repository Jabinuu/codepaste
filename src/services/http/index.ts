import { message } from 'ant-design-vue'
import axios from 'axios'
import nprogress from 'nprogress'
import { getToken } from '@/utils/auth'
import 'nprogress/nprogress.css'
import { downloadFile } from '@/utils/download'

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

  if (data.code === '10009') {
    // 更新短效token
    const useUserStore = await import('@/store/modules/user')
    const userStore = useUserStore.default()
    await userStore.updateToken()
    await userStore.getUserInfoAction()
    // 重新发起请求
    const res = await defHttp.request(response.config)

    return res
  }
  console.log(data)
  return data
}, (err) => {
  message.error('请求失败! 请检查网络设置')
  return err
})

export default defHttp
