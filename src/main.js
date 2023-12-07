import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Canvas from '@/pages/Canvas.vue'
import Profile from '@/pages/Profile.vue'
import Portfolio from '@/pages/Portfolio.vue'

 const routes = [
    {
        path: '/',
        component: Canvas,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/portfolio',
        component: Portfolio,
    },

 ]
 const router = createRouter({
    history: createWebHistory(),
    routes
 })

createApp(App).use(router).mount('#app')
