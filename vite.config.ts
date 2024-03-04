// import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { svgBuilder } from './src/plugins/svgBuilder'

// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    UnoCSS(),
    svgBuilder('./src/assets/icons/'),
    // addCDNsPlugin({
    //   cdnUrls: ['https://cdn.jsdelivr.net/gh/Jabinuu/xmutjb/asset/component-hook-15fdde01.js'],
    // }),
    // visualizer(),
  ],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite(path) {
          return path.replace(/^\/api/, '')
        },
      },
    },
  },

  build: {
    rollupOptions: {
      // manualChunks: {
      //   'highlight': ['highlight.js'],
      //   'hljsVuePlugin': ['@highlightjs/vue-plugin'],
      //   'component-hook': [path.resolve(__dirname, '/src/components/Authority.vue'), path.resolve(__dirname, '/src/hooks/useComputeSize.ts')],
      // },
      manualChunks(id) {
        if (id.includes('highlight.js') || id.includes('@highlightjs/vue-plugin'))
          return 'highlight'

        if (id.includes('src/components') || id.includes('src/hooks/'))
          return 'component-hook'
      },
      // external(id) {},
    },

  },

  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/': `${path.resolve(process.cwd(), '.', 'src')}/`,
    },
  },
})
