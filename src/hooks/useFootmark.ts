import useCodeStore from '@/store/modules/codes'

interface FootMarkItem {
  date: number
  codeId: string
  title: string
  lang: string
}

export default function useFootmark() {
  const codeStore = useCodeStore()
  const FOOTMARK_STORE = 'footmark-store'

  async function recordFootmark(codeId: string) {
    const footmark = localStorage.getItem(FOOTMARK_STORE)
    const codeInfo = await codeStore.getDetailById(codeId)
    let footmarkArr: FootMarkItem[]
    const newRecord = {
      title: codeInfo.title,
      date: Date.now(),
      lang: codeInfo.lang,
      codeId: codeInfo.codeId,
    }
    if (footmark) {
      footmarkArr = JSON.parse(footmark)
      footmarkArr = footmarkArr.filter(elem => elem.codeId !== newRecord.codeId)
      footmarkArr.push(newRecord)
    }
    else {
      footmarkArr = [newRecord]
    }
    localStorage.setItem(FOOTMARK_STORE, JSON.stringify(footmarkArr))
  }

  function getFootmark() {
    const footmarkString = localStorage.getItem(FOOTMARK_STORE)
    if (footmarkString) {
      const footmark = JSON.parse(footmarkString)
      return footmark
    }
  }

  function deleteDeletedFootmark(codeId: string) {
    let footmark = getFootmark()
    footmark = footmark.filter(item => item.codeId !== codeId)
    console.log(codeId)

    localStorage.setItem(FOOTMARK_STORE, JSON.stringify(footmark))
  }

  function deleteAllFootmark() {
    localStorage.removeItem(FOOTMARK_STORE)
  }

  return { recordFootmark, getFootmark, deleteDeletedFootmark, deleteAllFootmark }
}
