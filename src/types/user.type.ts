export interface CurrentUser {
  id: number
  username: string
  email: string
  role: number
  avatarUrl: string
}

export interface ChangeProfileFormState {
  tel: string
  hobby: string
  location: string
  job: string
  email: string
  introduction: string
  avatarUrl: string
}

export interface ChangeProfileReq extends ChangeProfileFormState {
  id: number
}

export interface UserCodeListItem {
  codeId: string
  title: string
  author: string
  encrypt: string
  lang: string
  content: string
  date: string
}

export interface UserFavoriteList {
  title: string
  content: string
  author: string
  date: number
  size: number
  viewNum: number
  commentNum: number
  lang: string
  id: number
  codeId: string
}
