import Mock from 'mockjs'
import { codeSet, dates, expirationSet, exposureSet } from './constant'

export const codesInfo = {
  status: 200,
  message: '请求成功',
  data: Mock.mock({
    'array|100': [
      {
        'id': '@increment(1)',
        'href': './codeDetail',
        'author': '@name',
        'title': '@ctitle(4, 8)',
        'expiration|1': expirationSet,
        'isCrypto|1': true,
        // 'category|1': categorySet,
        'exposure|1': exposureSet,
        'code|1': codeSet,
        'date|1': dates,
        'size|1-10000': 1,
        'views|1-1000': 1,
      },
    ],
  }),
}
