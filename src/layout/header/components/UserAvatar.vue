<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { LogincComponent } from '@/enums/loginCompEnum'

const userStore = useUserStore()
const router = useRouter()
function gocustomerCenter() {
  router.push('/individual')
}
function goHomePage() {
  userStore.loginComponentId = LogincComponent.LOGINGROUP
  router.push('/')
}
</script>

<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      <a-avatar size="large">
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
          <a @click="goHomePage">退出登录</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<style lang="less" scoped>

</style>
