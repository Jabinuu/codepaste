<script setup lang="ts">
interface DataItem {
  title: string
}
const data: DataItem[] = [
  {
    title: 'dasasf',
  },
  {
    title: 'jiakefsf',
  },
  {
    title: 'dasgf',
  },
  {
    title: 'bar',
  },
]
</script>

<template>
  <div>
    <h1>全部评论</h1>
    <a-list item-layout="horizontal" :data-source="data" :split="false">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-avatar src="http://cdn.zutjlx.site/image/202210031742845.png" :size="40" />
          <div class="right flex-1">
            <div class="comment-username flex justify-between">
              <div>{{ item.title }}</div>
              <div class="time">
                刚刚
              </div>
            </div>
            <div class="comment-content">
              啊好喜欢这段代码
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
