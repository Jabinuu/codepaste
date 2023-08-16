import { createApp } from 'vue'
import App from '@/App.vue'
import 'virtual:uno.css'
import '@/mock'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'

function bootstrap() {
  const app = createApp(App)

  // 自定义指令:点击dom之外的区域事件
  app.directive('clickOutside', {
    mounted(el, binding) {
      const handler = (e: any) => {
        if (!el.contains(e.target)) {
          if (binding.value && typeof binding.value === 'function')
            binding.value(e)
        }
      }
      el.__click_outside__ = handler
      document.addEventListener('click', handler)
    },
    unmounted(el) {
      document.removeEventListener('click', el.__click_outside__)
      delete el.__click_outside__
    },
  })
  // 配置路由
  setupRouter(app)

  // 配置pinia状态管理
  setupStore(app)

  app.mount('#app')
}

bootstrap()
