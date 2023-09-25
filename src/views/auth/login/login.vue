<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { setToken } from '@/utils/auth'
import type { LoginFormState } from '@/types/auth.type'
import useUserStore from '@/store/modules/user'
import { passwordInputRules, usernameInputRules } from '@/utils/constant'

const router = useRouter()
const route = useRoute()
const curTab = ref('login')
const userStore = useUserStore()
const rules = {
  username: usernameInputRules,
  password: passwordInputRules,
}
const formState = ref<LoginFormState>({
  username: '',
  password: '',
})
const formRef = ref()

const tabList = [{
  key: 'login',
  tab: '密码登录',
},
]

async function onClickLogin() {
  try {
    await formRef.value.validate()
    const res: any = await userStore.userLogin({
      username: formState.value.username,
      password: formState.value.password,
    })
    // 登录失败
    if (res.code !== 100)
      return message.error(res.msg)
    // 登录成功，持久化存储token,并跳转首页
    message.success(res.msg)
    setToken(userStore.token as string)
    if (route.query.redirect)
      router.push(route.query.redirect as string)
    else
      router.push('/add')
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
        :model="formState"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        :rules="rules"
        style="width:400px"
        autocomplete="off"
      >
        <a-form-item
          label="用户名"
          name="username"
        >
          <a-input v-model:value.trim="formState.username" placeholder="请输入账号" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
        >
          <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 20 }">
          还没有注册账号？
          <a-button type="link" class="mr-20" @click="router.push('/register')">
            点我注册
          </a-button>
          <a-button type="link" @click="router.push('/forget')">
            忘记密码
          </a-button>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
          <a-button type="primary" html-type="submit" style="width:100%" @click="onClickLogin">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<style lang="less" scoped>
</style>
