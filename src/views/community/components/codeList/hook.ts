import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useCodesStore from '@/store/modules/codes'

import type { CodeList } from '@/types/codeContentInfo'

export function useShowCodeList() {
  const codesStore = useCodesStore()
  const listData = computed(() => codesStore.codesList)
  const pagination = {
    onChange: (page: number) => {
      console.log(page)
    },
    pageSize: 8,
  }

  onMounted(() => {
    codesStore.getCodeInfo('hot')
  })

  function getCodeDesc(item: CodeList) {
    return item.code.content.slice(0, 100)
  }
  return {
    listData,
    pagination,
    getCodeDesc,
  }
}

export function useSwitchList(rule: string) {
  const codesStore = useCodesStore()
  codesStore.getCodeInfo(rule)
  console.log(rule)
}

export function useGoCodeDetail() {
  const router = useRouter()
  return {
    goCodeDetail(url: string) {
      router.push(url)
    },
  }
}
