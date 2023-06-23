<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import { LogincComponent } from '@/enums/loginCompEnum'

const userStore = useUserStore()
async function onClick() {
  userStore.loginComponentId = LogincComponent.USERAVATAR
}
</script>

<template>
  <div>
    <a-button type="primary" @click="onClick">
      登录
    </a-button>
    <span class="mlf-8" style="font-size: 10px;">或</span>
    <a-button>
      注册
    </a-button>
  </div>
</template>

<style lang="less" scoped>

</style>
@/enums/loginCompEnum
