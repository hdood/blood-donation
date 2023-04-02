import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Router } from "vue-router";

class AdminAuthStore {
	public currentUser = ref({});
	public authenticated = ref(false);
	public email = ref("");
	public password = ref("");
	public loading = ref(false);

	public login = async (router: Router) => {
		this.loading.value = true;
		const data = new FormData();

		data.append("email", this.email.value);
		data.append("password", this.password.value);

		const response = await axios({
			method: "post",
			url: "http://localhost:8000/api/admin/login",
			data: data,
			headers: { "Content-Type": "multipart/form-data" },
		});

		if (response.data.error) return;

		this.authenticated.value = true;
		this.currentUser.value = response.data.user;

		this.persistState();

		router.push({ name: "admin-dashboard" });
		this.loading.value = false;
	};

	public logout = async (router: Router) => {
		this.authenticated.value = false;
		this.currentUser.value = {};

		this.persistState();

		const response = await axios.post(
			"http://localhost:8000/api/admin/logout"
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
}

export default defineStore("admin-auth", () => {
	return new AdminAuthStore();
});
