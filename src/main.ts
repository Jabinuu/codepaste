import { createApp } from 'vue'
import 'virtual:uno.css'
import '@/mock'
import {
  Avatar, Button, Card, Cascader, Checkbox, Col, Descriptions, Divider,
  Drawer, Dropdown, Form, Input, Layout, List, Menu, Modal, Pagination,
  Popconfirm, Radio, Row, Select, Skeleton, Switch, Table, Tabs, Tag, Timeline,
  Tooltip, Upload,
} from 'ant-design-vue'

import 'ant-design-vue/dist/reset.css'
import { setupDirective } from './utils/directive'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import App from '@/App.vue'

function bootstrap() {
  const app = createApp(App)

  // 安装自定义指令
  setupDirective(app)

  // 配置pinia状态管理
  setupStore(app)

  // 配置路由
  setupRouter(app)

  app.use(Button).use(Divider).use(Layout).use(Dropdown).use(Menu).use(Pagination)
    .use(Form).use(Radio).use(Select).use(Switch).use(Avatar).use(Card).use(Descriptions)
    .use(List).use(Table).use(Tabs).use(Tag).use(Timeline).use(Tooltip).use(Drawer)
    .use(Modal).use(Input).use(Checkbox).use(Col).use(Row).use(Cascader).use(Upload)
    .use(Popconfirm).use(Skeleton)
  app.mount('#app')
}

bootstrap()
