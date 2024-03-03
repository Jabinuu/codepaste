<script setup lang="ts">
import type { Ref } from 'vue'
import { inject, ref } from 'vue'
import useCommentStore from '@/store/modules/comment'
import useUserStore from '@/store/modules/user'
import type { CodeList } from '@/types/codeContentInfo.type'

const userStore = useUserStore()
const currentCode = inject<Ref<CodeList>>('currentCode')
const isFocused = ref(false)
const isEmpty = ref(true)
const commentStore = useCommentStore()

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

async function submitComment() {
  const inputBox = document.querySelector('.input-box') as Element
  if (currentCode) {
    await commentStore.addCodeComment({
      cid: currentCode.value.id,
      uid: userStore.getCurUserId,
      content: inputBox.textContent || '',
    })
  }
  inputBox.textContent = ''
  isEmpty.value = true
  await commentStore.getCodeComment(currentCode?.value.codeId as string)
}
</script>

<template>
  <div v-clickOutside="onBlur" class="input-container">
    <h1>评论</h1>
    <div class="comment-form flex">
      <a-avatar src="http://cdn.zutjlx.site/image/202210031742845.png" :size="40" />
      <div
        class="input-box flex-1" :class="{ focused: isFocused, empty: isEmpty }"
        placeholder="输入评论 (Enter换行)" contenteditable="true" @focus="isFocused = true" @input="changeInputBox"
      />
    </div>
    <div v-show="isFocused" class="submit-button">
      <a-button type="primary" :disabled="isEmpty" @click="submitComment">
        发表评论
      </a-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.input-container {
  margin-bottom: 60px;

  .comment-form {
    .input-box {
      position: relative;
      transition: all .3s;
      min-height: 64px;
      outline: none;
      background-color: #f2f3f5;
      padding: 8px 12px;
      margin-left: 26px;
      color: #252933;
      box-sizing: border-box;
      line-height: 22px;
      font-size: 14px;
      border: 1px solid transparent;
      border-radius: 4px;
      cursor: text;
    }

    .input-box.empty::before {
      position: absolute;
      content: attr(placeholder);
      color: #8a919f;
    }

    .input-box.focused {
      border-color: #1e80ff;
      background: #fff;
    }
  }

  .submit-button {
    text-align: right;
    margin-top: 14px;
  }
}
</style>
