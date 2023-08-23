<script setup lang="ts">
import {
  CodeOutlined,
  CommentOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  StarOutlined,
} from '@ant-design/icons-vue'

import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const collapsed = ref<boolean>(true)
const selectedKeys = ref<string[]>([route.path.replace('/individual/', '')])

onMounted(() => {
  changeLayoutContent()
})

watch(route, newVal => selectedKeys.value = [newVal.name as string])

function changeLayoutContent() {
  const collapseTrigger = document.querySelector('.ant-layout-sider-trigger') as HTMLElement
  const layoutContnt = document.querySelector('.content') as HTMLElement
  collapseTrigger.addEventListener('click', () => {
    layoutContnt.style.marginLeft = collapsed.value ? '80px' : '200px'
  })
}
</script>

<template>
  <div class="container">
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible :style="{ position: 'fixed', top: '58px', left: 0, height: '100vh', background: '#fff' }">
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item key="info" @click="router.push('/individual/info')">
            <template #icon>
              <InfoCircleOutlined />
            </template>
            <span>个人信息</span>
          </a-menu-item>

          <a-menu-item key="codes" @click="router.push('/individual/codes')">
            <template #icon>
              <CodeOutlined />
            </template>
            <span>我的代码</span>
          </a-menu-item>
          <a-menu-item key="comments" @click="router.push('/individual/comments')">
            <template #icon>
              <CommentOutlined />
            </template>
            <span>我的评论</span>
          </a-menu-item>
          <a-menu-item key="star" @click="router.push('/individual/star')">
            <template #icon>
              <StarOutlined />
            </template>
            <span>我的收藏</span>
          </a-menu-item>
          <a-menu-item key="footprint" @click="router.push('/individual/footprint')">
            <template #icon>
              <HistoryOutlined />
            </template>
            <span>浏览记录</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <div class="content">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style lang="less" scoped>
.container{
  margin-top: -26px;
}
:deep(.ant-layout-sider-trigger){
  color: #002140;
  background: #fafafa;
}
.content{
  transition: all .2s;
  margin-left: 80px;
  padding: 24px;
  height: 100vh;
}
</style>
