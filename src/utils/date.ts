import dayjs from 'dayjs'
import _relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(_relativeTime)
dayjs.locale('zh-cn')
export function relativeTime(strDate: string | number) {
  return dayjs(strDate).fromNow()
}

export function formatDate(stamp: number | undefined, filter = 'YYYY-MM-DD HH:mm') {
  return dayjs(stamp).format(filter)
}
