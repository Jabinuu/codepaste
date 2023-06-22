import defHttp from '@/services/http'
import type { codeAllFromData } from '@/types/codeContentInfo'

export const reqGetCodeInfo = () => defHttp.get('/getCodeInfo')
export const reqUploadCode = (data: codeAllFromData) => defHttp.post('/uploadCode', data)
