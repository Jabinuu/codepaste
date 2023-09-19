import { message } from 'ant-design-vue'
import type { AxiosResponse } from 'axios'

export function downloadFile(response: AxiosResponse) {
  console.log('response.data type is:', response.data.type)
  return new Promise<void>((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = function () {
      try {
        console.log('resultz:', this.result)
        const jsonData = JSON.parse((this as any).result)
        if (jsonData?.code !== 200) {
          message.error(jsonData?.message ?? '请求失败')
          reject(jsonData)
        }
      }
      catch (error) {
        const blob = new Blob([response.data])
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        const filename = response?.headers?.['content-dispositon']?.split('filename*=')?.[1]?.substr(7)
        link.setAttribute('download', decodeURI(filename))
        document.body.appendChild(link)
        link.click()
        resolve(response.data)
      }
    }
    fileReader.readAsText(response.data)
  })
}
