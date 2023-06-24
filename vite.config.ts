import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { svgBuilder } from './src/plugins/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    svgBuilder('./src/assets/icons/'),
    // 安装组件自动按需引入的插件
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
