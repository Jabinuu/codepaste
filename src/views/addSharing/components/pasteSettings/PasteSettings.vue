<script setup lang="ts">
import { createNewPaste, settingsState, useMitt } from './hook'
import { categories, expirations, highlightLang } from '@/utils/constant'

useMitt()
</script>

<template>
  <h3 class="settingsTitle mb-30">
    设置选项
  </h3>
  <a-form :model="settingsState" autocomplete="off" :label-col="{ style: { width: '90px' } }" :wrapper-col="{ span: 10 }">
    <a-form-item label="文本标题">
      <a-input v-model:value="settingsState.title" placeholder="输入文本标题" />
    </a-form-item>
    <a-form-item label="文本属性">
      <a-select v-model:value="settingsState.category" :options="categories" />
    </a-form-item>
    <a-form-item v-if="settingsState.category === 'code'" label="选择语言">
      <a-select v-model:value="settingsState.lang" :options="highlightLang" placeholder="选择合适的语言" />
    </a-form-item>
    <a-form-item label="有效时长">
      <a-select v-model:value="settingsState.expiration" :options="expirations" />
    </a-form-item>
    <a-form-item label="公开状态">
      <a-radio-group v-model:value="settingsState.exposure">
        <a-radio :value="1">
          公开的
        </a-radio>
        <a-radio :value="0">
          私有的
        </a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="是否加密">
      <a-switch v-model:checked="settingsState.encrypt" />
    </a-form-item>
    <a-form-item v-if="settingsState.encrypt" label="访问密码">
      <a-input v-model:value="settingsState.codepw" placeholder="输入访问密码" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 3 }">
      <a-button type="primary" @click="createNewPaste">
        创建粘贴文本
      </a-button>
    </a-form-item>
  </a-form>
</template>

<style lang="less" scoped>
  .settingsTitle{
    border-bottom: 2px solid #ddd;
    line-height: 40px;
  }
</style>
../../../../utils/constant
