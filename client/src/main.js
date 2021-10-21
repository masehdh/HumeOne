import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// GLOBAL COMPONENTS
import TheHeader from './components/TheHeader.vue'

// VUE HEAD
import { Head } from '@vueuse/head'
import { createHead } from '@vueuse/head'

const head = createHead()

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookSquare, faLinkedin, faInstagramSquare, faEnvelopeSquare, faTwitterSquare, faLink, faBars)

// ANALYTICS
import Hotjar from 'vue-hotjar'
import VueGtag from "vue-gtag-next";

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
import Tooltip from 'primevue/tooltip';
import Checkbox from 'primevue/checkbox';
import Sidebar from 'primevue/sidebar';
import Chips from 'primevue/chips';


createApp(App)
  .use(store)
  .use(router)
  .use(head)
  .use(PrimeVue)
  .use(VueGtag, {
    property: {
      id: "G-YPL6L2BFCP",
      router,
      enabled: process.env.VUE_APP_ANALYTICS ? true : false, //tracks without the need for a cookie banner
    }
  })
  .use(Hotjar, {
    id: '2618134', // Hotjar Site ID
    isProduction: process.env.VUE_APP_ANALYTICS ? true : false
  })
  .directive('tooltip', Tooltip)
  .component('TheHeader', TheHeader)
  .component('font-awesome-icon', FontAwesomeIcon)
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
  .component("Checkbox", Checkbox)
  .component("Head", Head)
  .component("Sidebar", Sidebar)
  .component("Chips", Chips)
  .mount('#app')
