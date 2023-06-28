import { EyeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons-vue'

export const exposureMap = new Map([
  ['public', '公开'],
  ['private', '私有'],
])

export const actions: Record<string, any>[] = [
  { type: EyeOutlined, id: '1' },
  { type: MessageOutlined, id: '2' },
  { type: StarOutlined, id: '3' },
]
