import { useRouter } from 'vue-router'

export const pushToBlank = function (path, query = {}) {
  const router = useRouter()
  const routeData = router.resolve({
    path,
    query,
  })
  window.open(routeData.path, '_blank')
}
