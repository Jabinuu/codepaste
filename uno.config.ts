import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    // ...custom presets
  ],
  rules: [
    ['mr-2', { 'margin-right': '2px' }],
    ['pr-20', { 'padding-right': '20px' }],
    ['body-0', { margin: '0px', padding: '0' }],
    ['a-noline', { 'text-decoration': 'none' }],
    ['text-font1', { color: 'rgb(50,50,50)' }],
    ['text-font2', { color: '#515767' }],

  ],
})
