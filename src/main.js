import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./assets/styles.css";
import "./assets/main.css";

import jQuery from "jquery";
window.$ = jQuery;

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
