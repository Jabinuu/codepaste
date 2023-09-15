export interface CodeCommentList {
  id: number
  username: number
  avatarUrl: string
  content: string
  date: number
}

export interface UserCommentList {
  id: number
  author: string
  content: string
  data: number
  codeId: string
  title: string
}
