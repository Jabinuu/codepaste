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
        const filename = response?.headers?.['content-dispositon']?.split('filename*=')?.[1]?.substr(7)
        aTagDownloadAction(response.data, filename)
        resolve(response.data)
      }
    }
    fileReader.readAsText(response.data)
  })
}

export function aTagDownloadAction(data: any, filename: string) {
  const blob = new Blob([data])
  // 给blob对象创建一个专属url
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  // 设置下载文件的名字
  link.setAttribute('download', filename)
  link.style.display = 'none'
  document.body.appendChild(link)
  // 点击下载文件
  link.click()
  document.body.removeChild(link)
  // 释放 URL.createObjectURL() 创建的 URL 对象
  window.URL.revokeObjectURL(url)
}
