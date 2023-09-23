<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import useCodesStore from '@/store/modules/codes'
import type { CodeList } from '@/types/codeContentInfo.type'
import { formatDate } from '@/utils/date'

const userStore = useUserStore()
const codeStore = useCodesStore()
const route = useRoute()
const router = useRouter()
const codepw = ref<string>('')
const codeId = route.params.id as string
const currentCode = ref<CodeList>()
const avatar = ref<string>()

onMounted(() => {
  getAuthCardInfo()
})

async function getAuthCardInfo() {
  const data = await codeStore.getDetailById(codeId)
  currentCode.value = data
  const { avatarUrl } = await userStore.getUserInfoById({ id: currentCode.value.uid as number })
  avatar.value = avatarUrl
}

async function checkCodepw() {
  router.push({
    path: `/post/${currentCode.value?.codeId}`,
    query: { codepw: codepw.value }, // todo:传递一个md5加密后的密码，然后在路由首位解密，传送给后端进行验证
  })
}
</script>

<template>
  <div class="header">
    <div class="logo" />
    <span class="logo-text">PASTECODE</span>
  </div>
  <a-card>
    <template #title>
      <div class="title">
        <a-avatar :src="avatar" />
        <div class="info">
          <div class="creater-name">
            {{ currentCode?.author }}
          </div>
          <div class="create-date">
            {{ formatDate(currentCode?.date as number) }}
          </div>
        </div>
      </div>
    </template>
    <a-form layout="vertical">
      <a-form-item label="请输入验证密码：" :rules="[{ required: true, message: '请输入访问密码!' }]">
        <div class="flex">
          <a-input-password v-model:value="codepw" />
          <a-button type="primary" @click="checkCodepw">
            提取代码
          </a-button>
        </div>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 80px;
    height: 80px;
    background: url('https://cdn.zutjlx.site/image/202301041731996.png') no-repeat center/100%;
  }

  .logo-text {
    font-size: 30px;
    font-weight: 700;
  }
}

.ant-card {
  margin: 60px auto;
  width: 500px;

  .title {
    display: flex;
    padding: 16px 0;

    .ant-avatar {
      margin-right: 10px;
      width: 50px;
      height: 50px;
    }
  }

  .ant-input-password {
    width: 250px;
    margin-right: 40px;
  }

  .info {
    font-weight: normal;

    .create-date {
      color: #8a919f;
    }
  }
}
</style>
