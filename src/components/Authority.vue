<script setup lang="ts">
import { computed } from 'vue'
import useUserStore from '@/store/modules/user'

const props = defineProps({
  permissions: {
    type: [Number, Array],
  },
})
const userStore = useUserStore()
const userPerms = userStore.getUserPermissions

const showSlot = computed(() => {
  if (!props.permissions) {
    // 如果没有权限，直接显示
    return true
  }

  if (!userStore.getUserPermissions)
    return false

  if (Array.isArray(props.permissions)) {
    return props.permissions.every((item: number) => {
      return (item & userPerms) > 0
    })
  }
  return userPerms & props.permissions
})
</script>

<template>
  <slot v-if="showSlot" :user-perms="userPerms" />
</template>

<style lang="less" scoped>

</style>
