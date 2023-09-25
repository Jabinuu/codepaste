<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { categories, expirations, highlightLang } from '@/utils/constant'

const props = defineProps(['formState', 'isEdit'])
const route = useRoute()
const _formState = computed(() => props.formState)
const encrypt = computed({
  get() {
    return Boolean(_formState.value.encrypt)
  },
  set(newVal) {
    _formState.value.encrypt = newVal ? 1 : 0
  },
})
</script>

<template>
  <a-form-item label="文本标题" name="title">
    <a-input v-model:value="_formState.title" placeholder="输入文本标题" :disabled="!isEdit" />
  </a-form-item>
  <a-form-item label="文本属性">
    <a-select v-model:value="_formState.category" :options="categories" :disabled="!isEdit" />
  </a-form-item>
  <a-form-item v-if="_formState.category === 'code'" label="选择语言">
    <a-select v-model:value="_formState.lang" :options="highlightLang" placeholder="选择合适的语言" :disabled="!isEdit" />
  </a-form-item>
  <a-form-item v-if="route.path === '/add'" label="有效时长">
    <a-select v-model:value="_formState.expiration" :options="expirations" />
  </a-form-item>
  <a-form-item label="公开状态">
    <a-radio-group v-model:value="_formState.exposure" :disabled="!isEdit">
      <a-radio :value="1">
        公开的
      </a-radio>
      <a-radio :value="0">
        私有的
      </a-radio>
    </a-radio-group>
  </a-form-item>
  <a-form-item label="是否加密">
    <a-switch v-model:checked="encrypt" :disabled="!isEdit" />
  </a-form-item>
  <a-form-item v-if="_formState.encrypt" label="访问密码" :disabled="!isEdit" name="codepw">
    <a-input-password v-model:value="_formState.codepw" placeholder="输入访问密码" :visibility-toggle="false" />
  </a-form-item>
</template>

<style lang="less" scoped>

</style>
