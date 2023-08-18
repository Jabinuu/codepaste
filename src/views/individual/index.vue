<script setup lang="ts">
import {
  CodeOutlined,
  CommentOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  StarOutlined,
} from '@ant-design/icons-vue'

import { onMounted, ref } from 'vue'

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])
onMounted(() => {
  const collapseTrigger = document.querySelector('.ant-layout-sider-trigger') as HTMLElement
  const layoutContnt = document.querySelector('.content') as HTMLElement
  collapseTrigger.addEventListener('click', () => {
    if (collapsed.value)
      layoutContnt.style.marginLeft = '80px'
    else
      layoutContnt.style.marginLeft = '200px'
  })
})
</script>

<template>
  <div class="container">
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible :style="{ position: 'fixed', top: '58px', left: 0, height: '100vh', background: '#fff' }">
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item key="1">
            <template #icon>
              <InfoCircleOutlined />
            </template>
            <span>个人信息</span>
          </a-menu-item>
          <a-menu-item key="2" title="我的代码">
            <template #icon>
              <CodeOutlined />
            </template>
            <span>我的代码</span>
          </a-menu-item>
          <a-menu-item key="3" title="我的评论">
            <template #icon>
              <CommentOutlined />
            </template>
            <span>我的评论</span>
          </a-menu-item>
          <a-menu-item key="4" title="我的收藏">
            <template #icon>
              <StarOutlined />
            </template>
            <span>我的收藏</span>
          </a-menu-item>
          <a-menu-item key="5" title="浏览记录">
            <template #icon>
              <HistoryOutlined />
            </template>
            <span>浏览记录</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <div class="content">
          Bill is a cat.
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
  margin-left: 200px;
  padding: 24px;
  height: 100vh;
}
</style>
