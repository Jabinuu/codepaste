<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { userLogout } from '@/hooks/useAuth'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const router = useRouter()
function gocustomerCenter() {
  router.push('/individual')
}
function handleLogout() {
  router.push('/add')
  userLogout()
}
const avatarUrl = computed(() => userStore.getAvatarUrl)
const isHaveAvatar = computed(() => avatarUrl.value !== '')
</script>

<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      <a-avatar v-if="isHaveAvatar" size="large" :src="avatarUrl" />
      <a-avatar v-else size="large">]
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a @click="gocustomerCenter">个人中心</a>
        </a-menu-item>
        <a-menu-item>
          <a @click="handleLogout">退出登录</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<style lang="less" scoped>

</style>
