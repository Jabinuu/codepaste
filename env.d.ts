/// <reference types="vite/client" />
// 因为ts支持导入导出模块，而vue文件不是模块，两种方法：
// 1.需要手动把vue组件文件声明为模块  2.安装Vue.vscode-typescript-vue-plugin插件
// declare module "*.vue" {
//   import { App, defineComponent } from "vue";
//   const component: ReturnType<typeof defineComponent> & {
//     install(app: App): void;
//   };
//   export default component;
// }
