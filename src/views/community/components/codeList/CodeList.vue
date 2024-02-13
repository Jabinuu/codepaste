<script setup lang="ts">
import { EyeOutlined, MessageOutlined } from '@ant-design/icons-vue'
import { computed, ref, watch } from 'vue'
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

const start = ref(0)
const over = ref(0)

const vVirtualList = {
  mounted: (el: HTMLElement) => {
    const header = document.querySelector('.ant-layout-header') as HTMLElement
    const headerHeight = header.clientHeight
    const elTop = el.getBoundingClientRect().top
    const offset = elTop - headerHeight
    const itemHeight = 166
    const visibleHeight = document.body.clientHeight - headerHeight
    const visibleCount = Math.ceil(visibleHeight / itemHeight) + 1

    over.value = visibleCount
    const scrollHeight = computed(() => listData.value.codeList.length * itemHeight)
    watch(scrollHeight, () => {
      el.style.height = `${scrollHeight.value}px`
    }, { immediate: true })

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY - offset
      if (scrollTop > scrollHeight.value)
        return

      const scrollItemCount = Math.floor((scrollTop / itemHeight))
      start.value = Math.max(scrollItemCount, 0)
      over.value = start.value + visibleCount
      const computedOffset = scrollTop > 0 ? scrollTop - (scrollTop % itemHeight) : 0
      el.style.willChange = 'transform'
      el.style.transform = `translateY(${computedOffset}px)`
    })
  },
}
</script>

<template>
  <div class="list-container bg-w p-24 overflow-hidden">
    <ListMenu :query="queryParam" :loading-wrapper="loadingWrapper" @switch-list="onSwitchList" />
    <a-list v-virtual-list item-layout="vertical" size="large" :data-source="listData?.codeList.slice(start, over)">
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
