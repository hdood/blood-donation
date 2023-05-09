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
	public notifications = ref([]);

	public fetchAndAuthenticate = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/user"
			);
			this.authenticated.value = true;
			this.currentUser.value = response.data;
			return true;
		} catch (error: any) {
			this.authenticated.value = false;
			this.currentUser.value = {};
			return false;
		}
	};

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

		const response = await axios.post(
			import.meta.env.VITE_API_URL + "/admin/logout"
		);

		if (!response.data) return;

		router.push({ name: "admin-login" });
	};

	public register = async (user: any, router: Router) => {
		const response = await axios.post(
			import.meta.env.VITE_API_URL + "/admin/register",
			user
		);

		if (response.data.error) return false;

		this.authenticated.value = true;
		this.currentUser.value = response.data.user;

		await router.push({ name: "admin-dashboard" });
		notification(
			"Logged in",
			`you're logged in as ${this.currentUser.value?.name}`,
			"success"
		);
		this.loading.value = false;
	};

	public fetchNotifications = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/notifications"
			);

			this.notifications.value = response.data;
		} catch (error: any) {
			notification(
				"Error",
				"failed to fetch notifications",
				"danger",
				"CloseOutline"
			);
		}
	};
}

export default defineStore("admin-auth", () => {
	return new AdminAuthStore();
});
