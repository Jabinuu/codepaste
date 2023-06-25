import Mock from 'mockjs'
import { codeSet, dates, expirationSet, exposureSet } from './constant'

export const codesInfo = Mock.mock({
  'status': 200,
  'message': '请求成功',
  'data|100': [
    {
      'id': '@increment(1)',
      'href': './codeDetail',
      'author': '@name',
      'title': '@ctitle(4, 8)',
      'expiration|1': expirationSet,
      'encrypt|1': true,
      'exposure|1': exposureSet,
      'code|1': codeSet,
      'date|1': dates,
      'size|1-10000': 1,
      'viewNum|1-1000': 1,
      'commentNum|1-100': 1,
    },
  ],
})
