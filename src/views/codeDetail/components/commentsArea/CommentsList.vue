<script setup lang="ts">
import { computed } from 'vue'
import useCommentStore from '@/store/modules/comment'
import type { CommentList } from '@/types/comment'
import { relativeTime } from '@/utils/date'

const commentStore = useCommentStore()
const data = computed<CommentList[]>(() => commentStore.codeComment)
</script>

<template>
  <div>
    <h1>全部评论</h1>
    <a-list item-layout="horizontal" :data-source="data" :split="false">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-avatar :src="item.avatarUrl" :size="40" />
          <div class="right flex-1">
            <div class="comment-username flex justify-between">
              <div>{{ item.username }}</div>
              <div class="time">
                {{ relativeTime(item.date) }}
              </div>
            </div>
            <div class="comment-content">
              {{ item.content }}
            </div>
          </div>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<style lang="less" scoped>
.ant-list-item {
  margin-bottom: 16px;

  .right {
    margin-left: 20px;
  }

  .comment-username {
    font-weight: 600;
    font-size: 15px;
    color: #252933;
    margin-bottom: 10px;
  }

  .time {
    font-weight: 400;
    font-size: 14px;
    color: #8a919f;
  }

  .comment-content {
    font-weight: 400;
    font-size: 14px;
    color: #515767;
  }
}
</style>
