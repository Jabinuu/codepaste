export interface SettingOption {
  title: string
  language: string | undefined
  expiration: string
  password: string
  category: string
  exposure: string | undefined
  encrypt: boolean
}
export interface CodeFromData extends SettingOption {
  content: string
}

export interface CodeSet {
  category: string
  lang: string
  content: string
}

export interface CodeList extends Pick<SettingOption, 'title' | 'expiration' | 'encrypt'> {
  id: number
  href: string
  author: string
  code: CodeSet
  date: string
  size: number
  viewNum: number
  exposure: string
  commentNum: number
}
