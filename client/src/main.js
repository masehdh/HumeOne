import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// PRIMEVUE
import PrimeVue from "primevue/config";

// PRIMEVUE STYLE AND THEME
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-blue/theme.css";

// PRIMEFLEX
import 'primeflex/primeflex.css';

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .mount('#app')
