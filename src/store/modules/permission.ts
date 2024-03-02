import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { constantRoutesMap } from '@/router'

export default defineStore('permission', {
  state: () => {
    return {
      routers: constantRoutesMap as RouteRecordRaw[],
      addRouters: [] as any[],
    }
  },
  actions: {
    generatePermissionRoutes(targetRoutes: RouteRecordRaw[], perm: number) {
      this.addRouters = targetRoutes.filter((route) => {
        if (route.meta) {
          // eslint-disable-next-line no-prototype-builtins
          if (route.meta.hasOwnProperty('role')) {
            const res = (route.meta.role as number) & perm
            return res
          }
        }
        return true
      })

      // this.routers.concat(this.addRouters)
    },
  },
  getters: {

  },
})
