import defHttp from '@/services/http'
import type { CodeFromData } from '@/types/codeContentInfo'

export const reqGetCodeInfo = () => defHttp.get('/getCodeInfo')
export const reqUploadCode = (data: CodeFromData) => defHttp.post('/uploadCode', data)
export const reqGetDetailById = () => defHttp.get('/getDetailById')
