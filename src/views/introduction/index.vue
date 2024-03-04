<script setup lang="ts">

</script>

<template>
  <div id="container">
    <h1>pastecode 项目介绍</h1>
    <p>
      <b>视频演示地址：</b>
      <a href="https://cdn.jsdelivr.net/gh/Jabinuu/xmutjb/image/Vite%20+%20Vue%20-%20Google%20Chrome%202024-02-22%2017-07-31.mp4">
        视频链接
      </a>
    </p>

    <p>
      <b>项目上线地址：</b>
      <a href="https://pastecode-azure.vercel.app/">
        pastecode 代码粘贴分享平台
      </a>
    </p>

    <p>
      <b>项目开源仓库：</b>
      <a href="https://github.com/Jabinuu/pastecode">
        PasteCode
      </a>
    </p>

    <p>
      <b>项目背景：</b> 聊天工具传输一段代码时会出现字符解析问题，或者全角或半角字符切换的问题，例如qq上的#include&lt;bits/stdc++.h&gt; => 会解析出表情，还有微信传输python代码时，会偶尔出现原本缩进对齐的代码传输时产生误差，导致出现肉眼难以debug的情况…
    </p>

    <p>
      <b>项目调研：</b>市面上用的比较多的贴代码的比较好点的网站，比如：https://paste.ubuntu.com/，https://pastebin.com/，https://carbon.now.sh等，但这些网站的缺点是全英文，对于英文不好的可能出现难以适应操作步骤，登录注册有的需要Google邮箱，或者没有登录注册功能。
    </p>

    <p>
      <b>项目主要内容：</b>一个小而全的代码粘贴分享平台，支持粘贴代码的发布，分享，导出图片，外部引用链接，一键复制粘贴，下载代码，加密分享的功能，并能够发布代码的相关评论，浏览已存在的代码，支持用户对个人信息，已发布的代码，评论进行管理，查看浏览记录等功能
    </p>

    <p><b>项目亮点：</b></p>
    <ul>
      <li>
        使用cdn，gzip压缩，浏览器缓存技术，优化首屏访问速度，打开时间从 <code>3.2s => 1.2s</code>
      </li>
      <li>
        使用 Vue3 的  composition api 的优势，手动封装了一些通用操作，例如 useCodeTools 汇聚代码相关功能的工具箱（导出图片，分享链接…），useAuth 用户权限验证（登录，注册，退出登录），useDialogPut， useDecrpt，useFavorite…
      </li>
      <li>
        手动封装 axios 后，建立双 token 验证机制，避免出现意外退出登录的情况
      </li>
      <li>
        利用 pinia 对用户信息，浏览历史，加密代码等信息做本地可持久化存储，优化了用户体验
      </li>
      <li>
        利用 RABC 模型，利用 <code>vue-router</code> 路由控制和后端
        <code>token</code> 对 <code>role</code>
        角色的鉴权，实现个人中心的四种常见的权限控制：<code>菜单控制</code>，<code>按钮控制</code>，<code>界面控制</code>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
#container{
  width: 70%;
  margin: 0 auto;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  line-height: 2.5;
}
</style>
