<script setup lang="ts">
import { ref } from 'vue'

const isFocused = ref(false)
const isEmpty = ref(true)

function changeInputBox(e: any) {
  if (e.target.textContent === '')
    isEmpty.value = true
  else
    isEmpty.value = false
}

function onBlur() {
  if (isEmpty.value)
    isFocused.value = false
}
</script>

<template>
  <h1>评论</h1>
  <div class="comment-form flex">
    <div class="avatar" />
    <div
      class="input-box flex-1" :class="{ focused: isFocused, empty: isEmpty }" placeholder="输入评论 (Enter换行)"
      contenteditable="true" @focus="isFocused = true" @input="changeInputBox" @blur="onBlur"
    />
  </div>
</template>

<style lang="less" scoped>
.comment-form{
  .avatar{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 20px;
  background: no-repeat url(http://cdn.zutjlx.site/image/202210031742845.png) center/cover;
  }
  .input-box{
    position: relative;
    transition: all .3s;
    min-height: 64px;
    outline: none;
    background-color: #f2f3f5;
    padding: 8px 12px;
    color: #252933;
    box-sizing: border-box;
    line-height: 22px;
    font-size: 14px;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .input-box.empty::before{
    position: absolute;
    content: attr(placeholder);
    color: #8a919f;
  }
  .input-box.focused {
    border-color: #1e80ff;
    background: #fff;
  }
}
</style>
