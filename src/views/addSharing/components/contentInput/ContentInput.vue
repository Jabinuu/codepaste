<script setup lang="ts">
import { content, onBlurTextArea } from './hook'
</script>

<template>
  <h3>新增代码段</h3>
  <a-textarea v-model:value="content" placeholder="输入你的内容..." class="mb-30" @blur="onBlurTextArea" />
</template>

<style lang="less" scoped>
  textarea.ant-input{
    min-height: 398px;
    border-radius: 3px;
    font-family: Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,monospace,serif;
    font-size: 13px;
    tab-size: 4;
    background-color: #F5F5F5;
  }
</style>
