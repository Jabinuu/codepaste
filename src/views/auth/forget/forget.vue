<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import type { ChangePasswordFormState } from '@/types/auth.type'
import { emailInputRules, passwordInputRules, rePasswordInputRules, usernameInputRules } from '@/utils/constant'
import useUserStore from '@/store/modules/user'

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
const rules = {
  username: usernameInputRules,
  password: passwordInputRules,
  rePassword: rePasswordInputRules,
  email: emailInputRules,
}
const formRef = ref()
const userStore = useUserStore()
const router = useRouter()

async function changePassword() {
  try {
    await formRef.value.validate()
    try {
      await userStore.changePassword(formData.value)
      message.success('修改密码成功')
      router.push('/login')
    }
    catch (e: any) {
      message.error(e)
    }
  }
  catch (e) {}
}
</script>

<template>
  <div class="flex justify-center ">
    <a-card
      :tab-list="tabList"
      :active-tab-key="curTab"
      class="inline-block"
    >
      <a-form
        ref="formRef"
        :model="formData"
        name="basic"
        :rules="rules"
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
          label="新的密码"
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
          <a-button type="primary" class="mr-40" @click="changePassword">
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
