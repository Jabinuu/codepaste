import { createProxyMiddleware } from 'http-proxy-middleware'

export default (req, res) => {
  let target = ''

  // 代理目标地址
  if (req.url.startsWith('/api'))
    target = 'https://pastecode-server-72997-5-1321247427.sh.run.tcloudbase.com/'

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/backend`
      // 例如 /backend/user/login 将被转发到 http://backend-api.com/user/login
      '^/api/': '/',
    },
  })(req, res)
}
