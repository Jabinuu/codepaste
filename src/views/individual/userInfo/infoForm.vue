<script lang="ts" setup>
import { reactive } from 'vue'
import type { UnwrapRef } from 'vue'

interface FormState {
  introdction: string
  tel: string
  hobby: string
  location: string
  job: string
  mail: string
}
defineEmits(['change'])
const formState: UnwrapRef<FormState> = reactive({
  introdction: '',
  tel: '',
  hobby: '',
  location: '',
  job: '',
  mail: '',
})
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
}
const buttonItemLayout = {
  wrapperCol: { span: 14, offset: 2 },
}
</script>

<template>
  <div class="form-container">
    <a-form layout="horizontal" :model="formState" v-bind="formItemLayout">
      <a-form-item label="简介">
        <a-input v-model:value="formState.introdction" placeholder="输入简介" />
      </a-form-item>
      <a-form-item label="电话号码">
        <a-input v-model:value="formState.tel" placeholder="输入电话号码" />
      </a-form-item>
      <a-form-item label="兴趣">
        <a-input v-model:value="formState.hobby" placeholder="输入兴趣" />
      </a-form-item>
      <a-form-item label="现地址">
        <a-input v-model:value="formState.location" placeholder="输入现地址" />
      </a-form-item>
      <a-form-item label="职业">
        <a-input v-model:value="formState.job" placeholder="输入职业" />
      </a-form-item>
      <a-form-item label="邮箱地址">
        <a-input v-model:value="formState.mail" placeholder="输入邮箱地址" />
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" class="submit-button" @click="$emit('change', 0)">
          确认
        </a-button>
        <a-button @click="$emit('change', 0)">
          返回
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style>
.form-container {
  background-color: #fff;
  padding: 40px 0 24px;
  .ant-input{
    border-radius: 6px;
  }
  .submit-button {
    margin-right: 20px;
  }

  .ant-btn {
    border-radius: 6px;
  }
}
</style>
