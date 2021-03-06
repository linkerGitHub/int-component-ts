import { Component } from 'vue';

interface conponentsList {
  [key: string]: () => Promise<{default: Component}>;
}

const components: conponentsList = {
  message: () => import('ant-design-vue/lib/message'),
  notification: () => import('ant-design-vue/lib/notification'),
  Affix: () => import('ant-design-vue/lib/affix'),
  Anchor: () => import('ant-design-vue/lib/anchor'),
  AutoComplete: () => import('ant-design-vue/lib/auto-complete'),
  Alert: () => import('ant-design-vue/lib/alert'),
  Avatar: () => import('ant-design-vue/lib/avatar'),
  BackTop: () => import('ant-design-vue/lib/back-top'),
  Badge: () => import('ant-design-vue/lib/badge'),
  Breadcrumb: () => import('ant-design-vue/lib/breadcrumb'),
  Button: () => import('ant-design-vue/lib/button'),
  Calendar: () => import('ant-design-vue/lib/calendar'),
  Card: () => import('ant-design-vue/lib/card'),
  Collapse: () => import('ant-design-vue/lib/collapse'),
  Carousel: () => import('ant-design-vue/lib/carousel'),
  Cascader: () => import('ant-design-vue/lib/cascader'),
  Checkbox: () => import('ant-design-vue/lib/checkbox'),
  Col: () => import('ant-design-vue/lib/col'),
  DatePicker: () => import('ant-design-vue/lib/date-picker'),
  Divider: () => import('ant-design-vue/lib/divider'),
  Dropdown: () => import('ant-design-vue/lib/dropdown'),
  Form: () => import('ant-design-vue/lib/form'),
  Icon: () => import('ant-design-vue/lib/icon'),
  Input: () => import('ant-design-vue/lib/input'),
  InputNumber: () => import('ant-design-vue/lib/input-number'),
  Layout: () => import('ant-design-vue/lib/layout'),
  List: () => import('ant-design-vue/lib/list'),
  LocaleProvider: () => import('ant-design-vue/lib/locale-provider'),
  Menu: () => import('ant-design-vue/lib/menu'),
  Mentions: () => import('ant-design-vue/lib/mentions'),
  Modal: () => import('ant-design-vue/lib/modal'),
  Pagination: () => import('ant-design-vue/lib/pagination'),
  Popconfirm: () => import('ant-design-vue/lib/popconfirm'),
  Popover: () => import('ant-design-vue/lib/popover'),
  Progress: () => import('ant-design-vue/lib/progress'),
  Radio: () => import('ant-design-vue/lib/radio'),
  Rate: () => import('ant-design-vue/lib/rate'),
  Row: () => import('ant-design-vue/lib/row'),
  Select: () => import('ant-design-vue/lib/select'),
  Slider: () => import('ant-design-vue/lib/slider'),
  Spin: () => import('ant-design-vue/lib/spin'),
  Statistic: () => import('ant-design-vue/lib/statistic'),
  Steps: () => import('ant-design-vue/lib/steps'),
  Switch: () => import('ant-design-vue/lib/switch'),
  Table: () => import('ant-design-vue/lib/table'),
  Transfer: () => import('ant-design-vue/lib/transfer'),
  Tree: () => import('ant-design-vue/lib/tree'),
  TreeSelect: () => import('ant-design-vue/lib/tree-select'),
  Tabs: () => import('ant-design-vue/lib/tabs'),
  Tag: () => import('ant-design-vue/lib/tag'),
  TimePicker: () => import('ant-design-vue/lib/time-picker'),
  Timeline: () => import('ant-design-vue/lib/timeline'),
  Tooltip: () => import('ant-design-vue/lib/tooltip'),
  Upload: () => import('ant-design-vue/lib/upload'),
  Drawer: () => import('ant-design-vue/lib/drawer'),
  Skeleton: () => import('ant-design-vue/lib/skeleton'),
  Comment: () => import('ant-design-vue/lib/comment'),
  ConfigProvider: () => import('ant-design-vue/lib/config-provider'),
  Empty: () => import('ant-design-vue/lib/empty'),
  Result: () => import('ant-design-vue/lib/result'),
  Descriptions: () => import('ant-design-vue/lib/descriptions'),
  PageHeader: () => import('ant-design-vue/lib/page-header'),
  Space: () => import('ant-design-vue/lib/space'),
  Image: () => import('ant-design-vue/lib/image')
};

export default components;
