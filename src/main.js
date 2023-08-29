import "./styles/global.css";
import  "@/plugins/vant4.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import allIcons from "rtlink-icon";
import coms from "@/components";

const app = createApp(App);

app.use(router);
app.use(store);

app.use(allIcons);
app.use(coms);

app.mount("#app");
