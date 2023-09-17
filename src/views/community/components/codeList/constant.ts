import { EyeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons-vue'

export const exposureMap = new Map([
  [1, '公开'],
  [0, '私有'],
])

export const actions: Record<string, any>[] = [
  { type: EyeOutlined, id: 1 },
  { type: MessageOutlined, id: 2 },
  { type: StarOutlined, id: 3 },
]
