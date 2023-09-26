import type { Router } from 'vue-router'

export const pushToBlank = function (router: Router, path: string, query = {}) {
  const routeData = router.resolve({
    path,
    query,
  })
  window.open(routeData.path, '_blank')
}
