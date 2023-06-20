<script setup lang="ts">
import ContentInput from '@/views/addSharing/components/contentInput/ContentInput.vue'
import PasteSettings from '@/views/addSharing/components/pasteSettings/PasteSettings.vue'
import PublicCode from '@/components/publicCode.vue'
</script>

<template>
  <div class="flex">
    <div class="bg-w p-24 mr-40 flex-1 bdr-4">
      <ContentInput />
      <PasteSettings />
    </div>
    <PublicCode />
  </div>
</template>

<style lang="less" scoped>

</style>
