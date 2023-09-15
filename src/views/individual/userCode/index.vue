<script setup lang="ts">
import { ref } from 'vue'
import CodeFilter from './CodeFilter.vue'
import CodeList from './CodeList.vue'
import CodeEditor from './CodeEditor.vue'

const publicData = ref({
  pn: 1,
  ps: 8,
  kw: '',
  languages: [],
})

function onSendFilter(val) {
  publicData.value.kw = val.kw
  publicData.value.languages = val.languages
  publicData.value.pn = 1
}

function onSendPage(val) {
  publicData.value.ps = val.ps
  publicData.value.pn = val.pn
}
</script>

<template>
  <CodeFilter :public-data="publicData" @send-filter="onSendFilter" />
  <CodeList :public-data="publicData" @send-page="onSendPage" />
  <CodeEditor :public-data="publicData" />
</template>

<style lang="less" scoped>

</style>
