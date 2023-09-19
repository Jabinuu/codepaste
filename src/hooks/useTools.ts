import { useRouter } from 'vue-router'
import type { Directive, DirectiveBinding } from 'vue'
import { message } from 'ant-design-vue'
import { pushToBlank } from '@/hooks/usePushBlank'
import useCodeStore from '@/store/modules/codes'

interface ElType extends HTMLElement {
  targetContent: string
}

export default function useTools() {
  function pushToCitePage() {
    const router = useRouter()

    pushToBlank(router, 'localhost:3000/pastecode')
  }

  function downloadCodeFile(codeId: string) {
    const codeStore = useCodeStore()

    codeStore.downloadCodeFile({ codeId })
  }

  function copyCodeToClipboard() {
    return {
      beforeMount(el: ElType, binding: DirectiveBinding) {
        el.targetContent = binding.value as string
        el.addEventListener('click', () => {
          if (!el.targetContent)
            message.warn('没有需要复制的内容')
          const textarea: HTMLTextAreaElement = document.createElement('textarea')
          textarea.readOnly = true
          textarea.style.position = 'fixed'
          textarea.style.top = '-99999px'
          textarea.value = el.targetContent
          document.body.appendChild(textarea)
          textarea.select()
          const res: boolean = document.execCommand('Copy')
          const success = binding.arg as unknown as Function
          res && success ? success(el.targetContent) : console.log(`复制内容：${el.targetContent}`)
          document.body.removeChild(textarea)
        })
      },
      updated(el: ElType, binding: DirectiveBinding) {
        el.targetContent = binding.value
      },
      unmounted(el: ElType) {
        el.removeEventListener('click', () => {})
      },
    } as Directive
  }

  return {
    pushToCitePage,
    downloadCodeFile,
    copyCodeToClipboard,
  }
}
