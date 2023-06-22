export interface SettingOption {
  title: string | undefined
  language: string | undefined
  expiration: string | undefined
  password: string | undefined
  category: string | undefined
  exposure: string | undefined
  isCrypto: boolean | undefined
}

export interface CodeContentInfo extends SettingOption {
  id: number
}

export interface codeAllFromData extends SettingOption {
  content: string
}
