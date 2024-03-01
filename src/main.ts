import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import DashboardLayout from './components/DashboardLayout.vue'

const app = createApp(App)

app.component('DefaultLayout', DashboardLayout)

app.use(router)
app.use(VueSweetalert2)
app.mount('#app')
