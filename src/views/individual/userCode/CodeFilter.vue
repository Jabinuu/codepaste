<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { UnwrapRef } from 'vue'
import type { SelectProps } from 'ant-design-vue'
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons-vue'

interface FormState {
  keyword: string
  lang: string[]
}
const formState: UnwrapRef<FormState> = reactive({
  keyword: '',
  lang: [],
})

const options1 = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe',
  },
])
function focus() {
  console.log('focus')
}

function handleChange(value: string) {
  console.log(`selected ${value}`)
}
</script>

<template>
  <div class="code-filter">
    <a-form layout="inline" :model="formState">
      <a-form-item label="关键词">
        <a-input v-model:value="formState.keyword" placeholder="输入标题关键词" />
      </a-form-item>
      <a-form-item label="编程语言">
        <a-select
          v-model:value="formState.lang"
          mode="multiple"
          style="width: 200px"
          :options="options1"
          placeholder="选择编程语言"
          @focus="focus"
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="margin: 0 20px;">
          <SearchOutlined />查询
        </a-button>
        <a-button>
          <DeleteOutlined />重置
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
  .code-filter{
    background-color: #fff;
    padding: 24px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .ant-input{
    width:200px;
  }
  :deep(.ant-select-selector){
    border-radius: 6px !important
  }
</style>
