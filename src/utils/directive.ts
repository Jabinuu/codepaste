import type { App } from 'vue'
import useTools from '@/hooks/useTools'

export function setupDirective(app: App<Element>) {
  const { copyCodeToClipboard } = useTools()
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

  // 复制到粘贴板
  app.directive('copy', copyCodeToClipboard())
}
