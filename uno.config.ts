import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['m-1', { margin: '1px' }],
    ['body-0', { margin: '0px', padding: '0' }],
    ['a-noline', { 'text-decoration': 'none' }],
  ],
})
