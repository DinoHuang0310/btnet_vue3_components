import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

// swiper
import { register } from 'swiper/element/bundle';

const vfm = createVfm();
const app = createApp(App);

app.use(register);
app.use(vfm);
app.mount('#app')
