import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import './theme'
import Vue3Signature from "vue3-signature"
import routes from './index'
import App from './App.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
createApp(App).use(router).use(Vue3Signature).mount('#app')
