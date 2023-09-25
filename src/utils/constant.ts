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
  { label: 'Other', value: HighlightLangEnum.OTHER },
]
export const expirations: SelectorOption[] = [
  { label: '永久', value: ExpirationsEnum.NEVER },
  { label: '10分钟', value: ExpirationsEnum.M10 },
  { label: '1小时', value: ExpirationsEnum.H1 },
  { label: '1天', value: ExpirationsEnum.D1 },
  { label: '1周', value: ExpirationsEnum.W1 },
  { label: '1个月', value: ExpirationsEnum.MON1 },
]

export const langToExtname = new Map([
  [HighlightLangEnum.C, '.cpp'],
  [HighlightLangEnum.JAVA, '.java'],
  [HighlightLangEnum.JAVASCRIPT, '.js'],
  [HighlightLangEnum.PYTHON, '.py'],
  [HighlightLangEnum.CSS, '.css'],
  [HighlightLangEnum.HTML, 'html'],
  [HighlightLangEnum.TXT, '.txt'],
  [HighlightLangEnum.MARKDOWN, '.md'],
  [HighlightLangEnum.OTHER, '.txt'],
])

export const usernameInputRules = [
  { required: true, message: '请输入账号!' },
  { pattern: /^[a-zA-Z0-9]{4,16}$/, message: '用户名长度为4~16,用户名仅包含字母和数字!' },
]

export const passwordInputRules = [
  { required: true, message: '请输入密码!' },
  { pattern: /^[a-zA-Z0-9]*$/, message: '密码只能为字母，数字' },
]

export const emailInputRules = [
  { required: true, message: '请输入电子邮箱!' },
  { pattern: /^(\w)+@[\w]+.([A-Za-z]{2,4})$/, message: '邮箱格式不正确!' },
]

export const rePasswordInputRules = [
  { required: true, message: '请再次输入密码!' },
  { pattern: /^[a-zA-Z0-9]*$/, message: '密码只能为字母，数字' },
]

export const codeTitleInputRules = [
  { required: true, message: '文本标题不能为空' },
  { pattern: /^[a-zA-Z0-9\u4E00-\u9FA5\s]*$/, message: '标题只能为字母，数字，汉字和空格' },
]

export const codepwInputeRules = [
  { required: true, message: '访问密码不能为空!' },
  { pattern: /^[a-zA-Z0-9^\s]*$/, message: '访问密码只能为字母，数字' },
]
