import { computed, onMounted } from 'vue'
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
    codesStore.getCodeInfo()
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
