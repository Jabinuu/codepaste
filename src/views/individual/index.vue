<script setup lang="ts">
import {
  CodeOutlined,
  CommentOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  StarOutlined,
} from '@ant-design/icons-vue'
import { ref } from 'vue'

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])
</script>

<template>
  <div class="container">
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible :style="{ position: 'fixed', height: '100vh', background: '#fff' }">
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
      <a-layout-content style="margin: 0 16px" />
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
</style>
