/* eslint-disable @typescript-eslint/no-use-before-define */
import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import useCodesStore from '@/store/modules/codes'
import mitt from '@/utils/mitt'
import type { CodeList } from '@/types/codeContentInfo'
import type { CodeRequestBody } from '@/types/http'

export function useShowCodeList() {
  const codesStore = useCodesStore()
  const listData = computed(() => codesStore.listData)
  // 当前所在代码分类tab
  let curTab = 'hot'
  // 分页器数据
  const pagination = ref({
    current: 1,
    total: listData.value.total,
    pageSize: 3,
    onChange(page: number) {
      pagination.value.current = page
      getCodeList(curTab, queryParam)
    },
  })
  // 获取代码列表的请求体
  const queryParam: CodeRequestBody = {
    kw: '',
    languages: [],
    pn: pagination.value.current,
    ps: pagination.value.pageSize,
  }

  // 监听codeStore仓库数据变化，当请求完成时，更新total值
  watch(listData, (newVal) => {
    pagination.value.total = newVal.total
  })

  // 监听页码变化，并更新queryParam的pn值
  watchEffect(() => {
    queryParam.pn = pagination.value.current
  }, { flush: 'sync' })

  onMounted(() => {
    mitt.on('search', (val: string) => {
      queryParam.kw = val
      getCodeList(curTab, queryParam)
    })
    mitt.on('langFilter', (languages: string[]) => {
      queryParam.languages = languages
      pagination.value.current = 1
      getCodeList(curTab, queryParam)
    })
    codesStore.getHotlist(queryParam)
  })

  onUnmounted(() => {
    mitt.off('search')
    mitt.off('langFilter')
  })

  function getCodeDesc(item: CodeList) {
    return item.content.slice(0, 100)
  }

  function onSwitchList(tab: string) {
    curTab = tab
    pagination.value.current = 1
  }

  return {
    listData,
    pagination,
    queryParam,
    getCodeDesc,
    onSwitchList,
  }
}

export function getCodeList(tab: string, query: CodeRequestBody) {
  const codesStore = useCodesStore()
  if (tab === 'hot')
    codesStore.getHotlist(query)
  else if (tab === 'new')
    codesStore.getNewlist(query)
  else if (tab === 'quality')
    codesStore.getQualitylist(query)
}

export function useSwitchList() {
  const codesStore = useCodesStore()
  async function switchHotlist(queryParam: CodeRequestBody, emit: any) {
    emit('switchList', 'hot')
    await codesStore.getHotlist(queryParam)
  }
  async function switchNewlist(queryParam: CodeRequestBody, emit: any) {
    emit('switchList', 'new')
    await codesStore.getNewlist(queryParam)
  }
  async function switchQualitylist(queryParam: CodeRequestBody, emit: any) {
    emit('switchList', 'quality')
    await codesStore.getQualitylist(queryParam)
  }
  return {
    switchHotlist,
    switchNewlist,
    switchQualitylist,
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
