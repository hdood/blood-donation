import notification from "@/helpers/notification";
import axios, { AxiosError } from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Router } from "vue-router";

class AdminAuthStore {
	public currentUser = ref<any>({});
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
				url: import.meta.env.VITE_API_URL + "/admin/login",
				data: data,
				headers: { "Content-Type": "multipart/form-data" },
			});

			if (response.data.error) {
				this.error.value = response.data.error;
				this.loading.value = false;
				return;
			}

			this.authenticated.value = true;
			this.currentUser.value = response.data.user;

			this.persistState();

			await router.push({ name: "admin-dashboard" });
			notification(
				"Logged in",
				`you're logged in as ${this.currentUser.value.name}`,
				"success"
			);
			this.loading.value = false;
		} catch (error: any) {
			this.error.value = error.response?.data.message;
			this.loading.value = false;
			return;
		}
	};

	public logout = async (router: Router) => {
		this.authenticated.value = false;
		this.currentUser.value = {};

		this.persistState();

		const response = await axios.post(
			import.meta.env.VITE_API_URL + "/admin/logout"
		);

		if (!response.data) return;

		router.push({ name: "admin-login" });
	};

	public persistState() {
		localStorage.setItem(
			"authenticated",
			this.authenticated.value.toString()
		);
		localStorage.setItem("user", JSON.stringify(this.currentUser.value));
	}

	public register = async (user: any, router: Router) => {
		const response = await axios.post(
			import.meta.env.VITE_API_URL + "/admin/register",
			user
		);

		if (response.data.error) return false;
		console.log(response.data.user);
		debugger;

		this.authenticated.value = true;
		this.currentUser.value = response.data.user;

		this.persistState();

		await router.push({ name: "admin-dashboard" });
		notification(
			"Logged in",
			`you're logged in as ${this.currentUser.value?.name}`,
			"success"
		);
		this.loading.value = false;
	};

	public restoreState() {
		this.authenticated.value =
			localStorage.getItem("authenticated") === "true";
		this.currentUser.value = JSON.parse(
			localStorage.getItem("user") || "{}"
		);
	}
	public fetchUser = async () => {
		try {
			const { data } = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/user"
			);
			this.authenticated.value = true;
			this.currentUser.value = data;
			return true;
		} catch (error: any) {
			this.authenticated.value = false;
			this.currentUser.value = {};
			this.persistState();
			return false;
		}
	};
}

export default defineStore("admin-auth", () => {
	return new AdminAuthStore();
});
