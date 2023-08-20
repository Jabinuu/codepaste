<script setup lang="ts">
defineEmits(['change'])
</script>

<template>
  <a-card title="个人信息">
    <template #extra>
      <a @click="$emit('change', 1)">编辑信息</a>
    </template>
    <a-descriptions :column="1">
      <a-descriptions-item label="简介">
        暂无
      </a-descriptions-item>
      <a-descriptions-item label="电话号码">
        1810000000
      </a-descriptions-item>
      <a-descriptions-item label="兴趣">
        编程、羽毛球、健身
      </a-descriptions-item>
      <a-descriptions-item label="现地址">
        河南省 郑州市
      </a-descriptions-item>
      <a-descriptions-item label="职业">
        <a-tag color="blue">
          在校生
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="邮箱地址">
        1123565780@qq.com
      </a-descriptions-item>
      <a-descriptions-item label="注册时间">
        2023-06-19 09:22
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<style lang="less" scoped>

</style>
