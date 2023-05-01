import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import messages from "./content/messages";
import zondicons from "zondicons-vue";
import "./assets/main.css";
import { markRaw } from "vue";

const i18n = createI18n({
	legacy: false, // you must set `false`, to use Composition API
	locale: "en", // set locale
	fallbackLocale: "ar",
	messages,
});

axios.defaults.withCredentials = true;

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
	store.router = markRaw(router);
});
app.use(pinia);

app.use(router);
app.use(i18n);
app.use(zondicons);

app.mount("#app");
