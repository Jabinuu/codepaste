<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface FormState {
  username: string
  password: string

}

const router = useRouter()
const curTab = ref('login')

const formState = ref<FormState>({
  username: '',
  password: '',
})

const tabList = [{
  key: 'login',
  tab: '密码登录',
},
]
</script>

<template>
  <div class="flex justify-center">
    <a-card
      :tab-list="tabList"
      :active-tab-key="curTab"
      class="inline-block bdr-4"
    >
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        style="width:400px"
        autocomplete="off"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入账号!' }]"
        >
          <a-input v-model:value="formState.username" placeholder="请输入账号" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
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
          <a-button type="primary" style="width:100%">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<style lang="less" scoped>
</style>
