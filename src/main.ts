import { createApp } from 'vue'
import App from '@/App.vue'
import 'virtual:uno.css'
import { setupStore } from '@/stores'
import { setupRouter } from '@/router'

function bootstarp() {
  const app = createApp(App)
  // 配置路由
  setupRouter(app)

  // 配置pinia状态管理
  setupStore(app)

  app.mount('#app')
}

bootstarp()
