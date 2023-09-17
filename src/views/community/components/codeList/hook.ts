/* eslint-disable @typescript-eslint/no-use-before-define */
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { message } from 'ant-design-vue'
import { StarFilled } from '@ant-design/icons-vue'
import useCodesStore from '@/store/modules/codes'
import mitt from '@/utils/mitt'
import type { CodeList } from '@/types/codeContentInfo.type'
import type { CodeRequestBody } from '@/types/http.type'
import useUserStore from '@/store/modules/user'

export function useShowCodeList() {
  const codesStore = useCodesStore()
  const userStore = useUserStore()
  const listData = computed(() => codesStore.listData)
  // 当前所在代码分类tab
  let curTab = 'hot'
  // 分页器数据
  const pagination = ref({
    current: 1,
    total: computed(() => codesStore.listData.total),
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
    getCodeList(curTab, queryParam)
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

  async function handleClickStar(type: number, item: any) {
    if (type === 3) {
      try {
        const res = await codesStore.addFavorite({
          uid: userStore.getCurUserId,
          cid: item.id,
        })
        item.isFilled = true
        await userStore.getUserInfoAction()
        message.success(res)
      }
      catch (e: any) {
        message.error(e)
      }
    }
  }

  function computedIconType(type, id: number, isFilled) {
    if (id === 3)
      return isFilled ? StarFilled : type
    else
      return type
  }

  return {
    listData,
    pagination,
    queryParam,
    getCodeDesc,
    onSwitchList,
    handleClickStar,
    computedIconType,
  }
}

export async function getCodeList(tab: string, query: CodeRequestBody) {
  const codesStore = useCodesStore()
  if (tab === 'hot')
    await codesStore.getHotlist(query)
  else if (tab === 'new')
    await codesStore.getNewlist(query)
  else if (tab === 'quality')
    await codesStore.getQualitylist(query)
  handleStaredIcon(codesStore.listData.codeList)
}

export function handleStaredIcon(list: CodeList[]) {
  const userStore = useUserStore()
  if (userStore.getUserInfo()) {
    const favoArr = userStore.getUserFavorite

    list.forEach((elem) => {
      if (favoArr?.includes(elem.id))
        elem.isFilled = true
    })
  }
}

export function useSwitchList() {
  // const codesStore = useCodesStore()
  async function switchHotlist(queryParam: CodeRequestBody, emit: any) {
    emit('switchList', 'hot')
    getCodeList('hot', queryParam)
  }
  async function switchNewlist(queryParam: CodeRequestBody, emit: any) {
    emit('switchList', 'new')
    getCodeList('new', queryParam)
  }
  async function switchQualitylist(queryParam: CodeRequestBody, emit: any) {
    emit('switchList', 'quality')
    getCodeList('quality', queryParam)
  }
  return {
    switchHotlist,
    switchNewlist,
    switchQualitylist,
  }
}
