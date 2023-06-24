import Mock from 'mockjs'
import { CategoriesEnum, ExpirationsEnum, HighlightLangEnum } from '@/enums/codeEnum'

const langSet = [HighlightLangEnum.C, HighlightLangEnum.CSS, HighlightLangEnum.HTML, HighlightLangEnum.JAVA, HighlightLangEnum.JAVASCRIPT, HighlightLangEnum.OTHER, HighlightLangEnum.PYTHON]
const expirationSet = [ExpirationsEnum.D1, ExpirationsEnum.H1, ExpirationsEnum.M10, ExpirationsEnum.MON1, ExpirationsEnum.NEVER, ExpirationsEnum.W1]
const categorySet = [CategoriesEnum.CODE, CategoriesEnum.MARKDOWN, CategoriesEnum.TXT]
const exposureSet = ['public', 'private']
export default {
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
        'category|1': categorySet,
        'exposure|1': exposureSet,
        'content': '@',
        'language|1': langSet,
        'date|1': ['1月前', '2月前', '3天前', '4月前', '10分钟前'],
        'size|1-10000': 1,
        'views|1-1000': 1,
      },
    ],
  }),
}

/*
  所有代码信息
  id: number
  href: string
  author: string
  title: string
  content: string
  language: string
  expiration: string
  isCrypto: boolean
  category: string
  exposure: public
 */
