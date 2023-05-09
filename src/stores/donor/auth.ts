import type AuthStore from "@/contracts/AuthStore";
import notification from "@/helpers/notification";
import Donor from "@/models/Donor";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

class DonorAuthStore implements AuthStore {
	public currentUser = ref({});
	public authenticated = ref(false);
	public email = ref("");
	public password = ref("");
	public loading = ref(false);
	public errors = ref<any>(false);
	public tempDonor = ref(new Donor());
	public googleUserCredential = ref<any>(false);
	public notifications = ref([]);

	public fetchAndAuthenticate = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/donor/user"
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

	public login = async (router: any) => {
		this.loading.value = true;
		this.errors.value = "";
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

			this.authenticateDonor(response.data.user, router);
		} catch (error: any) {
			this.errors.value = error.response.data.error;
			this.loading.value = false;
			return;
		}
	};

	public logout = async (router: any) => {
		this.authenticated.value = false;
		this.currentUser.value = {};

		const response = await axios.post(
			"http://localhost:8000/api/donor/logout"
		);

		if (!response.data) return;

		router.push({ name: "donor-login" });
	};

	public register = async (router: any) => {
		this.loading.value = true;
		this.errors.value = false;
		const data = new FormData();

		data.append("name", this.tempDonor.value.name as string);
		data.append("email", this.tempDonor.value.email as string);
		data.append("password", this.tempDonor.value.password as string);
		data.append("phone", this.tempDonor.value.phone as string);
		data.append("address", this.tempDonor.value.address as string);
		data.append("bloodGroup", this.tempDonor.value.bloodGroup as string);
		data.append("dob", this.tempDonor.value.dob as string);
		data.append("gender", this.tempDonor.value.gender as string);
		data.append("rhFactor", this.tempDonor.value.rhFactor as string);

		try {
			const response = await axios({
				method: "post",
				url: "http://localhost:8000/api/donor/register",
				data: data,
				headers: { "Content-Type": "multipart/form-data" },
			});

			router.push({ name: "donor-register-success" });
		} catch (error: any) {
			this.errors.value = error?.response?.data?.message;
			this.loading.value = false;
			notification("something went wrong", "try again please", "error");
			return;
		}
	};

	public googleLogin = async (payload: any, router: any) => {
		const credential = payload.credential;

		const data = new FormData();
		data.append("credential_token", credential);

		try {
			const response = await axios.post(
				import.meta.env.VITE_API_URL + "/donor/login/google",
				data
			);

			this.authenticateDonor(response.data.user, router);
		} catch (error: any) {
			this.errors.value = error.response.data.error;
			this.loading.value = false;
			return;
		}
	};

	public googleRegister = async (router: any) => {
		const data = new FormData();
		data.append(
			"credential_token",
			this.googleUserCredential.value as string
		);

		data.append("phone", this.tempDonor.value.phone as string);
		data.append("address", this.tempDonor.value.address as string);
		data.append("bloodGroup", this.tempDonor.value.bloodGroup as string);
		data.append("dob", this.tempDonor.value.dob as string);
		data.append("gender", this.tempDonor.value.gender as string);
		data.append("rhFactor", this.tempDonor.value.rhFactor as string);

		try {
			const response = await axios.post(
				import.meta.env.VITE_API_URL + "/donor/register/google",
				data
			);

			router.push({ name: "donor-register-success" });
		} catch (error: any) {
			this.errors.value = error?.response?.data?.message;
			this.loading.value = false;
			notification("something went wrong", "try again please", "error");
			return;
		}
	};
	public checkGoogleUser = async (payload: any, router: any) => {
		const credential = payload.credential;

		const data = new FormData();
		data.append("credential_token", credential);

		try {
			const response = await axios.post(
				import.meta.env.VITE_API_URL + "/donor/user-check/google",
				data
			);
		} catch (error: any) {
			await this.googleLogin(payload, router);
			return;
		}
	};
	public saveCredential = (payload: any) => {
		this.googleUserCredential.value = payload.credential;
	};

	public async authenticateDonor(user: any, router: any) {
		this.errors = {};
		this.authenticated.value = true;
		this.currentUser.value = user;

		await router.push({ name: "donor-dashboard" });
		notification(
			"Logged In",
			`you are logged in as ${user.name}`,
			`success`,
			"Checkmark"
		);
		this.loading.value = false;
	}

	public fetchNotifications = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/donor/notifications"
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

export default defineStore("donor-auth", () => {
	return new DonorAuthStore();
});
