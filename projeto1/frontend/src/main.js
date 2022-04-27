import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'animate.css';
import '@/assets/css/tailwind.css';
import '@/assets/css/fonts.css';


const app = createApp(App);
app.use(Toast, { position: POSITION.BOTTOM_RIGHT });
app.use(router);
app.mount('#app');
