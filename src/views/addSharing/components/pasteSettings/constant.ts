interface SelectorOption {
  label: string
  value: string
}

export const categories: SelectorOption[] = [
  { label: '代码', value: 'code' },
  { label: '纯文本', value: 'text' },
  { label: 'MarkDown', value: 'richText' },
]
export const highlightLang: SelectorOption[] = [
  { label: 'C/C++', value: 'C/C++' },
  { label: 'JAVA', value: 'JAVA' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'Python', value: 'Python' },
  { label: 'CSS', value: 'CSS' },
  { label: 'HTML', value: 'HTML' },
  { label: 'other', value: '其他语言(暂不支持语法高亮)' },
]
export const expirations: SelectorOption[] = [
  { label: '永久', value: 'never' },
  { label: '10分钟', value: '10-M' },
  { label: '1小时', value: '1-H' },
  { label: '3小时', value: '3-H' },
  { label: '1天', value: '1-D' },
  { label: '1周', value: '1-W' },
  { label: '1个月', value: '1-Mon' },
  { label: '6个月', value: '6-Mon' },
]
