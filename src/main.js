import Vue from 'vue'
import App from './App.vue'
// 按需引入
import {
    Button,
    Container,
    Aside,
    Header,
    Main,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    Card,
    Table,
    TableColumn,
    Form,
    FormItem,
    Input,
    Select,
    Switch,
    DatePicker,
    Option,
    Dialog,
    Pagination,
    MessageBox,
    Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '../router'
import store from '../store'
import http from 'axios'
import '../api/mock.js'

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Option);
Vue.use(Dialog);
Vue.use(Pagination);

Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
new Vue({
    router,
    store: store,
    render: h => h(App),
}).$mount('#app')