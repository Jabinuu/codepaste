<script setup lang="ts">
import { EyeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons-vue'
import { computed, onMounted } from 'vue'
import ItemProperty from './components/ItemProperty.vue'
import ListMenu from './components/ListMenu.vue'
import CodeInfoBar from './components/CodeInfoBar.vue'
import useCodesStore from '@/store/modules/codes'

const codesStore = useCodesStore()
const actions: Record<string, any>[] = [
  { type: EyeOutlined, id: '1' },
  { type: MessageOutlined, id: '2' },
  { type: StarOutlined, id: '3' },
]
const listData = computed(() => codesStore.codesList)
const pagination = {
  onChange: (page: number) => {
    console.log(page)
  },
  pageSize: 8,
}

onMounted(() => {
  codesStore.getCodeInfo()
})

function getCodeDesc(item) {
  return item.code.content.slice(0, 100)
}
</script>

<template>
  <div class="list-container bg-w p-24">
    <ListMenu />
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item :key="item.id">
          <ItemProperty :encrypt="item.encrypt" :author="item.author" :exposure="item.exposure" />
          <a-list-item-meta>
            <template #title>
              <a :href="item.href" target="_blank">{{ item.title }}</a>
            </template>
            <template #description>
              {{ getCodeDesc(item) }}
            </template>
          </a-list-item-meta>
          <CodeInfoBar :lang="item.code.lang" :date="item.date" :size="item.size" />
          <template #actions>
            <span v-for="{ type, id } in actions" :key="id" class="hover">
              <component :is="type" style="margin-right: 4px" />
              <span v-if="type === EyeOutlined">{{ item.viewNum }}</span>
              <span v-else-if="type === MessageOutlined">{{ item.commentNum }}</span>
              <span v-else>收藏</span>
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

  .hover:hover{
    cursor:pointer;
    color: #409eff;;
  }
</style>
