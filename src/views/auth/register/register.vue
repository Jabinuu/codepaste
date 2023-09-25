<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import useUserStore from '@/store/modules/user'
import type { RegisterFormState } from '@/types/auth.type'
import { emailInputRules, passwordInputRules, rePasswordInputRules, usernameInputRules } from '@/utils/constant'

const tabList = [{
  tab: '注册',
  key: 'register',
}]
const curTab = 'register'
const formData = ref<RegisterFormState>({
  username: '',
  password: '',
  email: '',
  rePassword: '',
})
const formRef = ref()
const router = useRouter()
const userStore = useUserStore()
const rules = {
  username: usernameInputRules,
  email: emailInputRules,
  password: passwordInputRules,
  rePassword: rePasswordInputRules,
}
async function register() {
  try {
    await formRef.value.validate()
    const res: any = await userStore.userRegister({
      username: formData.value.username,
      password: formData.value.password,
      rePassword: formData.value.rePassword,
      email: formData.value.email,
    })
    // 注册失败
    if (res.code !== 100)
      return message.error(res.msg)

    message.success('注册成功!')
    router.push('/login')
  }
  catch (error) {}
}
</script>

<template>
  <div class="flex justify-center">
    <a-card
      :tab-list="tabList"
      :active-tab-key="curTab"
      class="inline-block "
    >
      <a-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        name="basic"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 19 }"
        style="width:400px"
        autocomplete="off"
      >
        <a-form-item
          label="用户名"
          name="username"
        >
          <a-input v-model:value="formData.username" placeholder="请输入账号" />
        </a-form-item>
        <a-form-item
          label="电子邮箱"
          name="email"
        >
          <a-input v-model:value="formData.email" placeholder="请输入电子邮箱" />
        </a-form-item>
        <a-form-item
          label="密码"
          name="password"
        >
          <a-input-password v-model:value="formData.password" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item
          label="重复密码"
          name="rePassword"
        >
          <a-input-password v-model:value="formData.rePassword" placeholder="请重复输入密码" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 5, span: 19 }">
          已经注册过账号？
          <a-button type="link" @click="router.push('/login')">
            跳转登录
          </a-button>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 5, span: 19 }">
          <a-button type="primary" style="width:100%" @click="register">
            注册
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<style lang="less" scoped>

</style>
