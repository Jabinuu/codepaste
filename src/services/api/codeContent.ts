import defHttp from '@/services/http'

export const reqGetCodeInfo = () => defHttp.get('/getCodeInfo')
export const reqUploadCode = () => defHttp.post('/uploadCode', 'hello world')
