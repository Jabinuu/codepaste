<script setup lang="ts">

</script>

<template>
  <div>
    <div id="container" class="github-markdown-body">
      <h1>
        网站常见问题
      </h1>
      <b>
        0.  网站使用的技术栈：
      </b>
      <blockquote>
        <p>
          前端方面：<code>vue3</code>  + <code>typescript</code> + <code>vite4</code> + <code>antDesign</code> + <code>pinia</code><br>
          后端方面：<code>node</code> + <code>koa2</code>  + <code>sequalize</code><br>
          内容存储：<code>云mysql</code> + <code>jsdelivr</code><br>
          网站部署：<code>vercel</code> + <code>微信云托管</code> （流水线部署）
        </p>
      </blockquote>
      <b>
        1.  网站是关于什么的？
      </b>
      <blockquote>
        <p>
          <code>pastecode</code> 是一个关于存储代码或者文本信息的网站，样式和基本功能仿制于 pastebin.com，你可以在线存储任何文本，方便分享。该网站主要用于程序员存储源代码或配置信息，但欢迎任何人粘贴任何类型的文本。该网站背后的想法是让人们更方便地在线分享大量文本。
        </p>
      </blockquote>
      <b>
        2.  存储文本与发布评论的要求
      </b>
      <blockquote>
        <p>
          请勿发布以下内容：
        </p>
        <ul>
          <li>电子邮件列表</li>
          <li>登录详细信息</li>
          <li>被盗源代码</li>
          <li>黑客数据</li>
          <li>受版权保护的信息/数据</li>
          <li>密码列表</li>
          <li>银行/信用卡/金融信息/数据</li>
          <li>个人信息/数据</li>
          <li>色情信息/资料</li>
          <li>垃圾邮件链接（包括宣传的网站或广告链接）</li>
        </ul>
        <p style="color: red;">
          否则可能会导致您的账户被禁用，或者存储的文本内容被删除。
        </p>
      </blockquote>
      <b>
        3. 游客创建的粘贴代码问题
      </b>
      <blockquote>
        <p>
          游客：没有注册登录过的状态
        </p>
        <p>
          在游客条件下，发布粘贴的代码，无法享受管理代码，收藏等其他权限。且可能会定期清除
        </p>
      </blockquote>
      <b>
        4. 代码单次大小限制：
      </b>
      <blockquote>
        <p>
          粘贴的最大大小为 1024 KB（1 MB）
        </p>
      </blockquote>
      <b>
        5. 目前支持高亮显示的语言有：
      </b>
      <blockquote>
        <p>
          <code>python</code> ，<code> java</code>， <code>c++</code>，<code>html</code>，<code>css</code>，<code>JavaScript</code>
        </p>
      </blockquote>
    </div>
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
