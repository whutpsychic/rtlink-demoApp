import './styles/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import allIcons from "rtlink-icon"
import coms from "@/components"

import vant4 from "@/plugins/vant4.js"

const app = createApp(App)

app.use(router)
app.use(store)

app.use(allIcons)
app.use(coms)

app.use(vant4)

app.mount('#app')
