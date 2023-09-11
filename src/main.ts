import { createApp } from 'vue'
import 'virtual:uno.css'
import '@/mock'
import {
  Avatar, Button, Card, Checkbox, Col, Descriptions, Divider, Drawer,
  Dropdown, Form, Input, Layout, List, Menu, Modal, Pagination, Radio,
  Row, Select, Switch, Table, Tabs, Tag, Timeline, Tooltip,
} from 'ant-design-vue'

import 'ant-design-vue/dist/reset.css'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import App from '@/App.vue'

function bootstrap() {
  const app = createApp(App)

  // 自定义指令:点击dom之外的区域事件
  app.directive('clickOutside', {
    mounted(el, binding) {
      const handler = (e: any) => {
        if (!el.contains(e.target)) {
          if (binding.value && typeof binding.value === 'function')
            binding.value(e)
        }
      }
      el.__click_outside__ = handler
      document.addEventListener('click', handler)
    },
    unmounted(el) {
      document.removeEventListener('click', el.__click_outside__)
      delete el.__click_outside__
    },
  })

  // 配置pinia状态管理
  setupStore(app)

  // 配置路由
  setupRouter(app)

  app.use(Button).use(Divider).use(Layout).use(Dropdown).use(Menu).use(Pagination)
    .use(Form).use(Radio).use(Select).use(Switch).use(Avatar).use(Card).use(Descriptions)
    .use(List).use(Table).use(Tabs).use(Tag).use(Timeline).use(Tooltip).use(Drawer)
    .use(Modal).use(Input).use(Checkbox).use(Col).use(Row)
  app.mount('#app')
}

bootstrap()
