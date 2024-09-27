import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 全局註冊 Swiper 和 SwiperSlide 組件
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.mount('#app')
