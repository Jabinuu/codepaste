<script setup lang="ts">
import { EyeOutlined, MessageOutlined } from '@ant-design/icons-vue'
import ItemProperty from './components/ItemProperty.vue'
import ListMenu from './components/ListMenu.vue'
import CodeInfoBar from './components/CodeInfoBar.vue'
import { actions } from './constant'
import { useShowCodeList } from './hook'

const {
  // pagination,
  listData,
  queryParam,
  // isLoading,
  placeholderDiv,
  loadingWrapper,
  getCodeDesc,
  onSwitchList,
  handleClickStar,
  computedIconType,
} = useShowCodeList()
</script>

<template>
  <div class="list-container bg-w p-24">
    <ListMenu :query="queryParam" :loading-wrapper="loadingWrapper" @switch-list="onSwitchList" />
    <a-list item-layout="vertical" size="large" :data-source="listData?.codeList">
      <template #renderItem="{ item }">
        <a-list-item :key="item?.id">
          <a-skeleton :paragraph="{ rows: 3 }" active :loading="item.loading">
            <ItemProperty :encrypt="item?.encrypt" :author="item?.author" :exposure="item?.exposure" />
            <a-list-item-meta>
              <template #title>
                <router-link :to="`/post/${item?.codeId}`" target="_blank">
                  {{ item?.title }}
                </router-link>
              </template>
              <template #description>
                {{ getCodeDesc(item) }}
              </template>
            </a-list-item-meta>
            <CodeInfoBar :lang="item?.lang" :date="item?.date" :size="item?.size" />
            <template #actions>
              <span v-for="{ type, id } in actions" :key="id" class="hover" @click="handleClickStar(id, item)">
                <component :is="computedIconType(type, id, item?.isFilled)" class="mr-4" :class="[{ filled: id === 3 && item?.isFilled }]" />
                <span v-if="type === EyeOutlined">{{ item?.viewNum }}</span>
                <span v-else-if="type === MessageOutlined">{{ item?.commentNum || '评论' }}</span>
                <span v-else>收藏</span>
              </span>
            </template>
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
    <div ref="placeholderDiv" style="height: 1px;" />
    <!-- <a-pagination
      v-model:current="pagination.current" :total="pagination.total"
      :page-size="pagination.pageSize" class="flex justify-end" @change="pagination.onChange"
    /> -->
  </div>
</template>

<style lang="less" scoped>
  .list-container{
    padding-top: 10px;
    margin-bottom: 80px;
  }
  .ant-menu-horizontal{
    border-bottom: 2px solid #f0f0f0;
    margin-bottom: 20px;
  }
  .anticon-star.filled{
    color: #409eff;
  }
  .hover:hover{
    cursor:pointer;
    color: #409eff;
  }
</style>
