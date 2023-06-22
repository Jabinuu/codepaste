import { EnumCategories, EnumExpirations, EnumHighlightLang } from '@/enums/codeContent'

interface SelectorOption {
  label: string
  value: string
}

export const categories: SelectorOption[] = [
  { label: '代码', value: EnumCategories.CODE },
  { label: '纯文本', value: EnumCategories.TXT },
  { label: 'MarkDown', value: EnumCategories.MARKDOWN },
]
export const highlightLang: SelectorOption[] = [
  { label: 'C/C++', value: EnumHighlightLang.C },
  { label: 'JAVA', value: EnumHighlightLang.JAVA },
  { label: 'JavaScript', value: EnumHighlightLang.JAVASCRIPT },
  { label: 'Python', value: EnumHighlightLang.PYTHON },
  { label: 'CSS', value: EnumHighlightLang.CSS },
  { label: 'HTML', value: EnumHighlightLang.HTML },
  { label: 'other', value: EnumHighlightLang.OTHER },
]
export const expirations: SelectorOption[] = [
  { label: '永久', value: EnumExpirations.NEVER },
  { label: '10分钟', value: EnumExpirations.M10 },
  { label: '1小时', value: EnumExpirations.H1 },
  { label: '1天', value: EnumExpirations.D1 },
  { label: '1周', value: EnumExpirations.W1 },
  { label: '1个月', value: EnumExpirations.MON1 },
]
