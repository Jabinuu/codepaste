<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function onClickLogin() {
  router.push('/login')
}

function onClickRegister() {
  router.push('/register')
}
</script>

<template>
  <div>
    <a-button type="primary" @click="onClickLogin">
      登录
    </a-button>
    <span class="mlf-8" style="font-size: 10px;">或</span>
    <a-button @click="onClickRegister">
      注册
    </a-button>
  </div>
</template>

<style lang="less" scoped>

</style>
