<script setup lang="ts">
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons-vue'
import ItemProperty from './components/ItemProperty.vue'
import ListMenu from './components/ListMenu.vue'
import CodeInfoBar from './components/CodeInfoBar.vue'

const actions: Record<string, any>[] = [
  { type: StarOutlined, text: '156' },
  { type: LikeOutlined, text: '60' },
  { type: MessageOutlined, text: '2' },
]
const listData: Record<string, string>[] = []
const pagination = {
  onChange: (page: number) => {
    console.log(page)
  },
  pageSize: 8,
}

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
</script>

<template>
  <div class="list-container bg-w p-24">
    <ListMenu />
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <ItemProperty />
          <a-list-item-meta>
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #description>
              {{ item.description }}
            </template>
          </a-list-item-meta>
          <CodeInfoBar />
          <template #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component :is="type" style="margin-right: 4px" />
              {{ text }}
            </span>
          </template>
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
