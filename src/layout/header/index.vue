<script setup lang="ts">
import { markRaw, reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import NavigateMenu from '@/layout/header/components/NavigateMenu.vue'
import LoginGroup from '@/layout/header/components/LoginGroup.vue'
import UserAvatar from '@/layout/header/components/UserAvatar.vue'

const userStore = useUserStore()
const value = ref<string>('')
const tabs = reactive([markRaw(LoginGroup), markRaw(UserAvatar)])
</script>

<template>
  <div class="flex flex-items-center">
    <div class="logo mr-2" />
    <router-link to="/">
      <span class="logo-font pr-20 text-font1">PASTECODE</span>
    </router-link>
    <NavigateMenu />
    <a-input-search
      v-model:value="value"
      placeholder="输入搜索关键词"
      style="width: 250px;"
      @search="() => {}"
    />
  </div>
  <keep-alive>
    <component :is="tabs[userStore.loginComponentId]" />
  </keep-alive>
</template>

<style lang="less" scoped>
.logo {
  width: 50px;
  height: 50px;
  background: url('https://cdn.zutjlx.site/image/202301041731996.png') no-repeat 10px;
  background-size: 45px;
}

.logo-font{
  font-size:18px;
  cursor: pointer;
  font-weight: 650;
  letter-spacing: 2px;
}
</style>
