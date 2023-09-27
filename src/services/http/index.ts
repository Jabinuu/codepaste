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
  const token = getToken()
  if (token)
    config.headers.Authorization = token

  nprogress.configure({ showSpinner: false })
  nprogress.start()
  return config
})

// 相应拦截器
defHttp.interceptors.response.use((response) => {
  nprogress.done()
  const { data } = response

  if (data instanceof Blob)
    return downloadFile(response)

  return data
}, (err) => {
  message.error('请求失败! 请检查网络设置')
  return err
})

export default defHttp
