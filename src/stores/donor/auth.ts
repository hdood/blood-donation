import notification from "@/helpers/notification";
import axios, { AxiosError } from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Router } from "vue-router";
import notificationVue from "zondicons-vue/icons/notification.vue";

class AdminAuthStore {
	public currentUser = ref({});
	public authenticated = ref(false);
	public email = ref("");
	public password = ref("");
	public loading = ref(false);
	public error = ref(false);

	public login = async (router: Router) => {
		this.loading.value = true;
		this.error.value = false;
		const data = new FormData();

		data.append("email", this.email.value);
		data.append("password", this.password.value);
		try {
			const response = await axios({
				method: "post",
				url: "http://localhost:8000/api/donor/login",
				data: data,
				headers: { "Content-Type": "multipart/form-data" },
			});
			if (response.data.error) {
				this.error.value = response.data.error;

				this.password.value = "";
				this.email.value = "";
				this.loading.value = false;
				return;
			}

			this.authenticated.value = true;
			this.currentUser.value = response.data.user;

			this.persistState();

			await router.push({ name: "donor-home" });
			notification(
				"Logged In",
				`you are logged in as ${response.data.user.name}`,
				`success`,
				"Checkmark"
			);
			this.loading.value = false;
		} catch (error: any) {
			this.error.value = error.response.data.message;
			this.loading.value = false;
			return;
		}
	};

	public logout = async (router: Router) => {
		this.authenticated.value = false;
		this.currentUser.value = {};

		this.persistState();

		const response = await axios.post(
			"http://localhost:8000/api/donor/logout"
		);

		if (!response.data) return;

		router.push({ name: "donor-login" });
	};

	public persistState() {
		localStorage.setItem(
			"donor_authenticated",
			this.authenticated.value.toString()
		);
		localStorage.setItem(
			"donor_user",
			JSON.stringify(this.currentUser.value)
		);
	}

	public register = async (user: any, router: Router) => {
		const response = await axios.post(
			"http://localhost:8000/api/donor/register",
			user
		);

		if (response.data.error) return false;
		console.log(response.data.user);
		debugger;

		this.authenticated.value = true;
		this.currentUser.value = response.data.user;

		this.persistState();

		await router.push({ name: "donor-home" });
		notification(
			"Logged In",
			`you are logged in as ${response.data.user.name}`,
			`success`,
			"Checkmark"
		);
		this.loading.value = false;
	};
}

export default defineStore("donor-auth", () => {
	return new AdminAuthStore();
});
