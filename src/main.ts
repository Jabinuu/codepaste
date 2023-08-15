import { createApp } from 'vue'
import App from '@/App.vue'
import 'virtual:uno.css'
import '@/mock'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'

function bootstrap() {
  const app = createApp(App)

  // 自定义一个代码高亮指令
  // app.directive('highlight', (el) => {
  //   const blocks = el.querySelectorAll('pre code')
  //   blocks.forEach((block: any) => {
  //     hljs.highlightBlock(block)
  //   })
  // })
  // 配置路由
  setupRouter(app)

  // 配置pinia状态管理
  setupStore(app)

  app.mount('#app')
}

bootstrap()
