<script setup lang="ts">
import ContentInput from '@/views/addSharing/components/contentInput/ContentInput.vue'
import PasteSettings from '@/views/addSharing/components/pasteSettings/PasteSettings.vue'
import PublicCode from '@/components/PublicCode.vue'
</script>

<template>
  <div class="flex justify-center">
    <div class="bg-w p-24 mr-40 bdr-4 left">
      <ContentInput />
      <PasteSettings />
    </div>
    <PublicCode />
  </div>
</template>

<style lang="less" scoped>
.left{
  width: 58%;
}
</style>
