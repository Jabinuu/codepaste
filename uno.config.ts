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
    ['mr-20', { 'margin-right': '20px' }],
    ['mb-30', { 'margin-bottom': '30px' }],
    ['mb-16', { 'margin-bottom': '16px' }],
    ['mlf-8', { margin: '0 8px' }],
    ['pr-20', { 'padding-right': '20px' }],
    ['p-24', { padding: '24px' }],
    ['pt-10', { 'padding-top': '10px' }],
    ['a-noline', { 'text-decoration': 'none' }],
    ['bdr-4', { 'border-radius': '4px' }],
    ['text-font1', { color: 'rgb(50,50,50)' }],
    ['text-font2', { color: '#515767' }],
    ['bg-w', { background: '#fff' }],
    ['bw-2', { 'border-width': '2px' }],
  ],
})
