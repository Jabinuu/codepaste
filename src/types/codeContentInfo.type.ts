export interface SettingOption {
  title: string
  lang: string | undefined
  expiration: string
  codepw: string
  category: string
  exposure: number
  encrypt: boolean
}
export interface CodeFromData extends SettingOption {
  content: string
  author: string
  uid: number
}

export interface CodeSet {
  category: string
  lang: string
  content: string
}

export interface CodeList extends Pick<SettingOption, 'title' | 'expiration' | 'encrypt'> {
  id: number
  author: string
  lang: string
  content: string
  category: string
  date: number
  size: number
  viewNum: number
  exposure: number
  commentNum: number
}
