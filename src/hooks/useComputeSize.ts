import { computed } from 'vue'

function myToFixed(num: number | string, digit: number): string {
  if (Object.is(Number.parseFloat(num as string), NaN))
    throw new Error('error: myToFixed传入的值不是一个数字')
  num = Number.parseFloat(num as string)
  return (Math.round((num + Number.EPSILON) * 10 ** digit) / 10 ** digit).toFixed(digit)
}

export default function useComputedSzie(bytes: number) {
  if (bytes) {
    return computed((): string => {
      let size: string
      if (bytes > 1024)
        size = `${myToFixed(bytes / 1024, 2)} KB`
      else
        size = `${bytes}字节`
      return size
    })
  }
}
