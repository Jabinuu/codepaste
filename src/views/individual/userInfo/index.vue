<script setup lang="ts">
import { ref } from 'vue'
import InfoForm from '@/views/individual/userInfo/InfoForm.vue'
import Descriptions from '@/views/individual/userInfo/Descriptions.vue'
import useUserStore from '@/store/modules/user'

const tabs = [Descriptions, InfoForm]
const currentTab = ref(0)
const userStore = useUserStore()
const { avatarUrl, username, role } = userStore.getUserInfo()
function onChange(e: any) {
  currentTab.value = e
}
</script>

<template>
  <div class="info-wrap">
    <a-card class="top-card bdr-4">
      <a-row>
        <a-col :span="2">
          <a-avatar :src="avatarUrl" :size="64" />
        </a-col>
        <a-col :span="22">
          <p>
            <span class="username">{{ username }}</span>
            <a-tag color="green">
              V{{ role }}
            </a-tag>
          </p>
          <p class="info-content">
            暂无个人简介
          </p>
        </a-col>
      </a-row>
    </a-card>
    <keep-alive>
      <component :is="tabs[currentTab]" class="bottom-card bdr-4" @change="onChange" />
    </keep-alive>
  </div>
</template>

<style lang="less" scoped>
.info-wrap {
  margin: 0 140px 0;

  .top-card {
    .username {
      font-size: 18px;
      font-weight: 600;
      margin-right: 20px;
    }

    .info-content {
      font-size: 12px;
    }
  }

  .bottom-card {
    margin-top: 20px;

    :deep(.ant-descriptions-item-label) {
      margin-right: 6px;
    }
  }
}
</style>
