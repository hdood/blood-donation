import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "./assets/main.css";

const messages = {
	en: {
		guest: {
			donate: "Donate",
			getBlood: "Get Blood",
			login: "Sign in",
			bloodDonationBenifits: "Donation Benefits",
			aboutUs: "About Us",
			dashboard: "Dashboard",
		},
	},
	ar: {
		guest: {
			donate: "تبرع",
			getBlood: "أطلب الدم",
			login: "تسجيل الدخول",
			bloodDonationBenifits: "اجابيات التبرع بالدم",
			aboutUs: "عنا؟",
			dashboard: "لوحة التحكم",
		},
	},
};

const i18n = createI18n({
	legacy: false, // you must set `false`, to use Composition API
	locale: "en", // set locale
	fallbackLocale: "ar",
	messages, // set fallback locale
});

axios.defaults.withCredentials = true;

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
