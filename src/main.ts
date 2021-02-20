import { createApp } from 'vue';

import Antd from 'ant-design-vue';
import App from './app';
import router from './router';
import './style/index.css';
import 'ant-design-vue/dist/antd.css';
import dragDrop from './components/drag-drop';

// import 'ant-design-vue/lib/date-picker/style';
// 加载 LESS

createApp(App).use(router).use(Antd).use(dragDrop.installer)
  .mount('#app');
