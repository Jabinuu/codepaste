<script setup lang="ts">
import { ClockCircleOutlined, FireOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

const listData: Record<string, string>[] = []
const pagination = {
  onChange: (page: number) => {
    console.log(page)
  },
  pageSize: 8,
}
const actions: Record<string, any>[] = [
  { type: StarOutlined, text: '156' },
  { type: LikeOutlined, text: '156' },
  { type: MessageOutlined, text: '2' },
]
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}

const current = ref<string[]>(['hot'])
</script>

<template>
  <div class="list-container bg-w p-24">
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="hot">
        <template #icon>
          <FireOutlined />
        </template>
        最热
      </a-menu-item>
      <a-menu-item key="new">
        <template #icon>
          <ClockCircleOutlined />
        </template>
        最新
      </a-menu-item>
      <a-menu-item key="quality">
        <template #icon>
          <LikeOutlined />
        </template>
        精选
      </a-menu-item>
    </a-menu>
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component :is="type" style="margin-right: 8px" />
              {{ text }}
            </span>
          </template>
          <a-list-item-meta>
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #description>
              {{ item.description }}
            </template>
          </a-list-item-meta>
          <div>
            <div>
              <span>
                <Icon name="icon-javascript" size="16px" />
                JavaScript</span>
              <a-divider type="vertical" style="border-width: 2px;" />
              <span>1天前</span>
              <a-divider type="vertical" style="border-width: 2px;" />
              <span>1.2 KB</span>
            </div>
          </div>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<style lang="less" scoped>
  .list-container{
    padding-top: 10px;
  }
  .ant-menu-horizontal{
    border-bottom: 2px solid #f0f0f0;
    margin-bottom: 20px;
  }
</style>
