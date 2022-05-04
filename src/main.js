import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { auth } from './includes/firebase'

import './tailwind.css'

import App from './App.vue'
import validation from './includes/validation'

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(validation);

        app.mount('#app');
    }
});