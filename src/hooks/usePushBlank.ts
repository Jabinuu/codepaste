import type { Router } from 'vue-router'

export const pushToBlank = function (router: Router, path, query = {}) {
  const routeData = router.resolve({
    path,
    query,
  })
  console.log(routeData.path)

  window.open(routeData.path, '_blank')
}
