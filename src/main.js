import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { windowOpen } from "@/mixins/windowOpen";
/////
import './assets/scss/main.scss';

const app = createApp(App);

app
    .use(store)
    .use(router)
    .mixin(windowOpen)
    .mount('#app');
