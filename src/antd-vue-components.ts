import Vue from "vue";
import {
  LocaleProvider,
  Layout,
  message,
  Popover,
  Button,
  Icon
} from "ant-design-vue";

Vue.prototype.$message = message;

Vue.use(LocaleProvider);
Vue.use(Layout);
Vue.use(Popover);
Vue.use(Button);
Vue.use(Icon);
