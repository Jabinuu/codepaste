import Mock from 'mockjs'
import codesData from '@/mock/modules/codeContent'

Mock.mock('/mock/getCodeInfo', codesData)
// Mock.mock('/mock/upLoadCode', 'post', (_:any,_:any,body:string) => {

// })
