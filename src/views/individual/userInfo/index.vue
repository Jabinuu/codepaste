<script setup lang="ts">

</script>

<template>
  <div>
    <a-card class="top-card">
      <a-row>
        <a-col :span="2">
          <a-avatar src="http://cdn.zutjlx.site/image/202210031742845.png" :size="64" />
        </a-col>
        <a-col :span="22">
          <p>
            <span class="username">Jabinuu</span>
            <a-tag color="green">
              V1
            </a-tag>
          </p>
          <p class="info-content">
            暂无个人简介
          </p>
        </a-col>
      </a-row>
    </a-card>
    <a-card class="bottom-card" title="个人信息">
      <template #extra>
        <a href="#">编辑信息</a>
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
  </div>
</template>

<style lang="less" scoped>
.top-card{
  width: 100%;
  .username{
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
  }
  .info-content{
    font-size: 12px;
  }
}

.bottom-card{
  margin-top: 20px;
  :deep(.ant-descriptions-item-label){
    margin-right: 6px;
  }
}
</style>
