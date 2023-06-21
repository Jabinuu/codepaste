import Mock from 'mockjs'
import codesData from '@/mock/modules/codeContent'

Mock.mock('/mock/upLoadCode', 'get', codesData)
