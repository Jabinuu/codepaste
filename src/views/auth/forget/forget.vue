<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { ChangePasswordFormState } from '@/types/auth.type'

const tabList = [{
  tab: '重置密码',
  key: 'forget',
}]
const curTab = 'forget'
const formData = ref<ChangePasswordFormState>({
  username: '',
  password: '',
  email: '',
  rePassword: '',
})
const router = useRouter()
</script>

<template>
  <div class="flex justify-center ">
    <a-card
      :tab-list="tabList"
      :active-tab-key="curTab"
      class="inline-block"
    >
      <a-form
        :model="formData"
        name="basic"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 19 }"
        style="width:400px"
        autocomplete="off"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入账号!' }]"
        >
          <a-input v-model:value="formData.username" placeholder="请输入账号" />
        </a-form-item>
        <a-form-item
          label="电子邮箱"
          name="email"
          :rules="[{ required: true, message: '请输入电子邮箱~' }]"
        >
          <a-input v-model:value="formData.email" placeholder="请输入电子邮箱" />
        </a-form-item>
        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input v-model:value="formData.password" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item
          label="重复密码"
          name="rePassword"
          :rules="[{ required: true, message: '请重复输入密码!' }]"
        >
          <a-input v-model:value="formData.rePassword" placeholder="请重复输入密码" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 5, span: 19 }">
          <a-button type="primary" class="mr-40">
            提交修改
          </a-button>
          <a-button @click="router.push('/login')">
            返回登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<style lang="less" scoped>

</style>
