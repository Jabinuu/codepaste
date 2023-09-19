import { useRouter } from 'vue-router'
import { pushToBlank } from '@/hooks/usePushBlank'
import useCodeStore from '@/store/modules/codes'

export function useTools() {
  const router = useRouter()
  const codeStore = useCodeStore()
  function pushToCitePage() {
    pushToBlank(router, 'localhost:3000/pastecode')
  }

  function downloadCodeFile(codeId: string) {
    codeStore.downloadCodeFile({ codeId })
  }

  return {
    pushToCitePage,
    downloadCodeFile,
  }
}
