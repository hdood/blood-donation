import type AuthStore from "@/contracts/AuthStore";
import notification from "@/helpers/notification";
import Patient from "@/models/Patient";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

class PatientAuthStore implements AuthStore {
	public currentUser = ref({});
	public authenticated = ref(false);
	public email = ref("");
	public password = ref("");
	public loading = ref(false);
	public errors = ref<any>(false);
	public tempPatient = ref(new Patient());
	public googleUserCredential = ref<any>(false);
	public notifications = ref([]);

	public fetchAndAuthenticate = async () => {
		const response = await axios.get(
			import.meta.env.VITE_API_URL + "/patient/user"
		);
		if (response.data.error) {
			this.authenticated.value = false;
			this.currentUser.value = {};
			return false;
		}

		this.authenticated.value = true;
		this.currentUser.value = response.data;
		return true;
	};

	public login = async (router: any) => {
		this.loading.value = true;
		this.errors.value = false;
		const data = new FormData();

		data.append("email", this.email.value);
		data.append("password", this.password.value);
		try {
			const response = await axios({
				method: "post",
				url: "http://localhost:8000/api/patient/login",
				data: data,
				headers: { "Content-Type": "multipart/form-data" },
			});

			this.authenticatePatient(response.data.user, router);
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
			"http://localhost:8000/api/patient/logout"
		);

		if (!response.data) return;

		router.push({ name: "patient-login" });
	};

	public register = async (router: any) => {
		this.loading.value = true;
		this.errors.value = false;
		const data = new FormData();

		data.append("name", this.tempPatient.value.name as string);
		data.append("email", this.tempPatient.value.email as string);
		data.append("password", this.tempPatient.value.password as string);
		data.append("phone", this.tempPatient.value.phone as string);
		data.append("address", this.tempPatient.value.address as string);
		data.append("dob", this.tempPatient.value.dob as string);
		data.append("gender", this.tempPatient.value.gender as string);

		try {
			const response = await axios({
				method: "post",
				url: "http://localhost:8000/api/patient/register",
				data: data,
				headers: { "Content-Type": "multipart/form-data" },
			});

			this.authenticatePatient(response.data.user, router);
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
				import.meta.env.VITE_API_URL + "/patient/login/google",
				data
			);

			this.authenticatePatient(response.data.user, router);
		} catch (error: any) {
			this.errors.value = error.response.data.message;
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

		data.append("phone", this.tempPatient.value.phone as string);
		data.append("address", this.tempPatient.value.address as string);
		data.append("dob", this.tempPatient.value.dob as string);
		data.append("gender", this.tempPatient.value.gender as string);

		try {
			const response = await axios.post(
				import.meta.env.VITE_API_URL + "/patient/register/google",
				data
			);

			this.authenticatePatient(response.data.user, router);
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
				import.meta.env.VITE_API_URL + "/patient/user-check/google",
				data
			);

			this.authenticatePatient(response.data.user, router);
		} catch (error: any) {
			await this.googleLogin(payload, router);
			return;
		}
	};
	public saveCredential = (payload: any) => {
		this.googleUserCredential.value = payload.credential;
	};

	public async authenticatePatient(user: any, router: any) {
		this.errors = {};
		this.authenticated.value = true;
		this.currentUser.value = user;

		await router.push({ name: "patient-home" });
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
				import.meta.env.VITE_API_URL + "/patient/notifications"
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

export default defineStore("patient-auth", () => {
	return new PatientAuthStore();
});
