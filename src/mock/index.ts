import Mock from 'mockjs'
import { codesInfo } from '@/mock/modules/codeContent'

Mock.mock('/mock/getCodeInfo', codesInfo)
// Mock.mock('/mock/uploadCode', 'post', (options) => {
//   codesInfo.push(JSON.parse(options.body))
//   console.log(codesInfo)
// })
