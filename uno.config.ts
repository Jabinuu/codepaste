import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    // ...custom presets
  ],
  rules: [
    ['mr-2', { 'margin-right': '2px' }],
    ['mr-40', { 'margin-right': '40px' }],
    ['mb-30', { 'margin-bottom': '30px' }],
    ['mlf-8', { margin: '0 8px' }],
    ['pr-20', { 'padding-right': '20px' }],
    ['p-24', { padding: '24px' }],
    ['body-0', { margin: '0px', padding: '0' }],
    ['a-noline', { 'text-decoration': 'none' }],
    ['bdr-4', { 'border-radius': '4px' }],
    ['text-font1', { color: 'rgb(50,50,50)' }],
    ['text-font2', { color: '#515767' }],
    ['bg-w', { background: '#fff' }],
  ],
})
