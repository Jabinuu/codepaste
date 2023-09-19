<script setup lang="ts">
import { ApiOutlined, CopyOutlined, DownloadOutlined, ExportOutlined, ShareAltOutlined } from '@ant-design/icons-vue'
import type { Ref } from 'vue'
import { inject } from 'vue'
import { useTools } from './hook'

import type { CodeList } from '@/types/codeContentInfo.type'

const currentCode = inject<Ref<CodeList>>('currentCode')
const { downloadCodeFile } = useTools()
</script>

<template>
  <div class="tag-group">
    <a-tag color="blue" class="cursor-pointer">
      <ApiOutlined class="mr-4" />引用
    </a-tag>
    <a-tooltip>
      <template #title>
        代码文件下载到本地
      </template>
      <a-tag color="blue" class="cursor-pointer" @click="downloadCodeFile((currentCode as any).codeId)">
        <DownloadOutlined class="mr-4" />下载
      </a-tag>
    </a-tooltip>

    <a-tooltip>
      <template #title>
        代码生成图片导出
      </template>
      <a-tag color="blue" class="cursor-pointer">
        <ExportOutlined class="mr-4" />导出
      </a-tag>
    </a-tooltip>
    <a-tooltip>
      <template #title>
        一键复制代码
      </template>
      <a-tag color="blue" class="cursor-pointer">
        <CopyOutlined class="mr-4" />复制
      </a-tag>
    </a-tooltip>

    <a-tag color="blue" class="cursor-pointer">
      <ShareAltOutlined class="mr-4" />点击分享
    </a-tag>
  </div>
</template>

<style lang="less" scoped>
.tag-group{
  font-size: 13px;
  opacity: 0.8;
}
</style>
