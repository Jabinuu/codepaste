export function addCDNsPlugin(options: { cdnUrls: string[] }) {
  const { cdnUrls } = options

  return {
    name: 'vite-plugin-add-cdn',
    transformIndexHtml(html: string) {
      let scriptTag = ''
      cdnUrls.forEach((url) => {
        scriptTag += `
          <script type="module" src="${url}"></script>
        `
      })

      // 将其拼接在title标签后面
      const updatedHtml = html.replace('</title>', `</title>\n\t${scriptTag}`)

      return updatedHtml // 返回新的html字符串
    },
  }
}
