import { computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import useCodesStore from '@/store/modules/codes'
import mitt from '@/utils/mitt'
import type { CodeList } from '@/types/codeContentInfo'
import type { CodeRequestBody } from '@/types/http'

export const queryParam: CodeRequestBody = {
  kw: '',
  languages: [],
  pn: 1,
  ps: 8,
}

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
    mitt.on('searchValue', (val: string) => {
      queryParam.kw = val
    })
    codesStore.getHotlist(queryParam)
  })

  onUnmounted(() => {
    mitt.off('searchValue')
  })

  function getCodeDesc(item: CodeList) {
    return item.content.slice(0, 100)
  }

  return {
    listData,
    pagination,
    getCodeDesc,
  }
}

export async function useSwitchList(rule: string) {
  const codesStore = useCodesStore()
  if (rule === 'hot') {
    console.log('hot')
    await codesStore.getHotlist(queryParam)
  }
  else if (rule === 'new') {
    await codesStore.getNewlist(queryParam)
  }
  else if (rule === 'quality') {
    await codesStore.getQualitylist(queryParam)
  }
}

export function useGoCodeDetail() {
  const router = useRouter()
  return {
    goCodeDetail(url: string) {
      router.push(url)
    },
  }
}
