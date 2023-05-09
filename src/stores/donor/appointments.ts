import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import useAuthStore from "@/stores/donor/auth";
import axios from "axios";
import notification from "@/helpers/notification";

class AppointmentsStore {
	public questions = ref([]);
	public answers: any = ref([]);
	public lastAppointment: any = ref({});
	public state = ref("");
	public freeHours = ref([]);
	public tempTime = ref("");
	public tempDate: any = ref("");
	public formattedDate = computed(
		() =>
			`${this.tempDate.value?.getFullYear?.()}-${
				this.tempDate.value?.getMonth?.() + 1
			}-${this.tempDate.value?.getDate?.()}`
	);
	public bookModal = ref(false);
	public toggleBookModal = () =>
		(this.bookModal.value = !this.bookModal.value);

	fetchAppointmentState = async () => {
		try {
			const { data } = await axios.get(
				import.meta.env.VITE_API_URL + "/donor/appointment/state"
			);

			this.state.value = data.state;
			this.lastAppointment.value = data?.appointment;
		} catch (error: any) {}
	};

	public bookAppointment = async () => {
		const { currentUser } = useAuthStore();
		const id = currentUser.id;
		const data = new FormData();
		data.append("donor_id", id);

		data.append("answers", JSON.stringify(this.answers.value));
		data.append("date", this.formattedDate.value);
		data.append("time", this.tempTime.value);

		try {
			const response = axios.post(
				import.meta.env.VITE_API_URL + "/donor/appointment/book",
				data
			);
			notification(
				"Success",
				"Appointment booked successfully",
				"success",
				"Checkmark"
			);
			this.fetchAppointmentState();
		} catch (error: any) {
			notification(
				"Error",
				"failed to book appointment please try again",
				"danger",
				"CloseOutline"
			);
		}
	};

	public fetchQuestions = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/donor/questions/appointment"
			);

			this.questions.value = response.data;
		} catch (error: any) {
			notification(
				"Error",
				"failed to fetch questions",
				"danger",
				"CloseOutline"
			);
		}
	};

	public cancelAppointment = async () => {
		try {
			await axios.delete(
				import.meta.env.VITE_API_URL + "/donor/appointment/cancel "
			);
			notification(
				"Success",
				"Appointment cancelled successfully",
				"success",
				"Checkmark"
			);
			await this.fetchAppointmentState();
		} catch (error: any) {
			notification(
				"Error",
				"failed to cancel appointment",
				"danger",
				"CloseOutline"
			);
		}
	};

	public fetchFreeHours = async (date: string) => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL +
					`/donor/appointment/free-hours/${date}`
			);

			this.freeHours.value = response.data;
		} catch (error: any) {
			notification(
				"Error",
				"failed to load free hours",
				"danger",
				"CloseOutline"
			);
		}
	};
}

export default defineStore("donor-appointments", () => {
	return new AppointmentsStore();
});
