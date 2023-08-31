<script setup lang="ts">
import { EyeOutlined, MessageOutlined } from '@ant-design/icons-vue'
import ItemProperty from './components/ItemProperty.vue'
import ListMenu from './components/ListMenu.vue'
import CodeInfoBar from './components/CodeInfoBar.vue'
import { actions } from './constant'
import { useShowCodeList } from './hook'

const { pagination, listData, getCodeDesc } = useShowCodeList()
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
              <router-link :to="`./post/${item.cid}`" target="_blank">
                {{ item.title }}
              </router-link>
            </template>
            <template #description>
              {{ getCodeDesc(item) }}
            </template>
          </a-list-item-meta>
          <CodeInfoBar :lang="item.lang" :date="item.date" :size="item.size" />
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
