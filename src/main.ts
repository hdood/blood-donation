import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import messages from "./content/messages";

import "./assets/main.css";

const i18n = createI18n({
	legacy: false, // you must set `false`, to use Composition API
	locale: "en", // set locale
	fallbackLocale: "ar",
	messages,
});

axios.defaults.withCredentials = true;

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
