import { HighlightLangEnum } from '@/enums/codeEnum'

// 用于筛选编程语言组件的语言数组转为 请求体的语言数组
export function computeLanguages(filter: string[]) {
  const res: string[] = []
  filter.forEach((elem) => {
    if (elem) {
      if (elem !== HighlightLangEnum.OTHER)
        res.push(elem)
      else
        res.push(HighlightLangEnum.TXT, HighlightLangEnum.MARKDOWN)
    }
  })
  return res
}
