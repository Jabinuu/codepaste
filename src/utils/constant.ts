import { CategoriesEnum, ExpirationsEnum, HighlightLangEnum } from '@/enums/codeEnum'

interface SelectorOption {
  label: string
  value: string
}

export const categories: SelectorOption[] = [
  { label: '代码', value: CategoriesEnum.CODE },
  { label: '纯文本', value: CategoriesEnum.TXT },
  { label: 'MarkDown', value: CategoriesEnum.MARKDOWN },
]
export const highlightLang: SelectorOption[] = [
  { label: 'C/C++', value: HighlightLangEnum.C },
  { label: 'Java', value: HighlightLangEnum.JAVA },
  { label: 'JavaScript', value: HighlightLangEnum.JAVASCRIPT },
  { label: 'Python', value: HighlightLangEnum.PYTHON },
  { label: 'CSS', value: HighlightLangEnum.CSS },
  { label: 'HTML', value: HighlightLangEnum.HTML },
  { label: 'other', value: HighlightLangEnum.OTHER },
]
export const expirations: SelectorOption[] = [
  { label: '永久', value: ExpirationsEnum.NEVER },
  { label: '10分钟', value: ExpirationsEnum.M10 },
  { label: '1小时', value: ExpirationsEnum.H1 },
  { label: '1天', value: ExpirationsEnum.D1 },
  { label: '1周', value: ExpirationsEnum.W1 },
  { label: '1个月', value: ExpirationsEnum.MON1 },
]
