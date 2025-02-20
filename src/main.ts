import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

createApp(App)
.use(Quasar)
.mount("#app");
