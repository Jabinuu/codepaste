<script setup lang="ts">

</script>

<template>
  <div class="header-container flex justify-between flex-items-center">
    <div class="avatar mr-20" />
    <div class="header-info flex-1">
      <div>title</div>
      <div>something</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header-container {
  height: 50px;
  border-bottom: 1px solid #000;

  .avatar {
    width: 40px;
    height: 40px;
    background-color: pink;
  }

  .header-info {
    height: 46px;
    background-color: skyblue;
  }
}
</style>
