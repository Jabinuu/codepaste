import { message } from 'ant-design-vue'
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const defHttp = axios.create({
  baseURL: '/api',
  timeout: 3000,
})

defHttp.interceptors.request.use((config) => {
  nprogress.configure({ showSpinner: false })
  nprogress.start()
  return config
})

defHttp.interceptors.response.use((response) => {
  nprogress.done()
  const { data } = response
  return data
}, (err) => {
  message.error(err)
  return Promise.reject(err)
})

export default defHttp
