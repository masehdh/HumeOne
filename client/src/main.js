import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// PRIMEVUE
import PrimeVue from "primevue/config";

// PRIMEVUE STYLE AND THEME
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/md-light-indigo/theme.css";

// PRIMEFLEX
import 'primeflex/primeflex.css';

// PRIMEVUE COMPONENTS
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
import Button from "primevue/button";
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import TreeSelect from 'primevue/treeselect';
import MultiSelect from 'primevue/multiselect';
import Message from 'primevue/message';
import ScrollTop from 'primevue/scrolltop';
import Dialog from 'primevue/dialog';
import InputMask from 'primevue/inputmask';
import Slider from 'primevue/slider';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import Avatar from 'primevue/avatar';

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .component("InputText", InputText)
  .component("Textarea", Textarea)
  .component("Button", Button)
  .component("AutoComplete", AutoComplete)
  .component("Dropdown", Dropdown)
  .component("TreeSelect", TreeSelect)
  .component("MultiSelect", MultiSelect)
  .component("Message", Message)
  .component("ScrollTop", ScrollTop)
  .component("Dialog", Dialog)
  .component("InputMask", InputMask)
  .component("Slider", Slider)
  .component("SelectButton", SelectButton)
  .component("ScrollPanel", ScrollPanel)
  .component("Avatar", Avatar)
  .mount('#app')
