import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';
import ColorPicker from 'primevue/colorpicker';
import Calendar from 'primevue/calendar';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';
import i18n from "@/locales/i18n";

import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Product from "@/components/Product.vue";
import Comment from "@/components/Comment.vue";
import Post from "@/components/Post.vue";
import NewComment from "@/components/NewComment.vue";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { createRouter,createWebHistory } from "vue-router";

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/comment', component: Comment },
  { path: '/post', component: Post },
  { path: '/new-comment', component: NewComment }
]
const history=createWebHistory()
const router= createRouter({
    history,
    routes
  }
)

import "primevue/resources/themes/bootstrap4-light-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                         //icons
import "/node_modules/primeflex/primeflex.css"
const app = createApp(App);
app.use(i18n)
app.use(router);
app.use(PrimeVue);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('InputMask', InputMask);
app.component('pv-dropdown', Dropdown);
app.component('pv-ColorPicker', ColorPicker);
app.component('Calendar', Calendar);
app.component('RadioButton', RadioButton);
app.component('Checkbox', Checkbox);
app.component('Textarea', Textarea);
app.component('pv-dataTable', DataTable);
app.component('pv-column', Column);


app.mount('#app')
