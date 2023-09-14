export interface CodeRequestBody {
  kw: string
  languages: string[]
  ps: number
  pn: number
}

export interface UserCodeReqBody {
  id: number // 用户id
  kw: string
  languages: string[] | []
  ps: number
  pn: number
}

export interface ChangeCodeBody {
  title: string
  lang: string | undefined
  codepw?: string
  encrypt: number
  category: string
  content: string
  codeId: string
  exposure: number
}
