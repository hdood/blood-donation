import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import notification from "@/helpers/notification";

class AppointmentsStore {
	public appointmentsRequests = ref([]);
	public acceptedAppointments = ref([]);
	public scheduledAppointments = ref([]);
	public cancelledAppointments = ref([]);
	public answeredQuestions: any = ref([]);
	public tempId = ref("");
	public tempDate = ref();
	public tempTime = ref();
	public freeHours = ref([]);

	public formattedDate = computed(
		() =>
			`${this.tempDate.value?.getFullYear?.()}-${
				this.tempDate.value?.getMonth?.() + 1
			}-${this.tempDate.value?.getDate?.()}`
	);

	public fetchTodayAppointments = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/appointment/today"
			);
			this.acceptedAppointments.value = response.data;
		} catch (error) {
			notification(
				"Error",
				"failed to load appointments requests",
				"danger",
				"CloseOutline"
			);
		}
	};

	public fetchAppointmentsRequests = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/appointment/requests"
			);
			this.appointmentsRequests.value = response.data;
		} catch (error) {
			notification(
				"Error",
				"failed to load appointments requests",
				"danger",
				"CloseOutline"
			);
		}
	};

	public fetchAcceptedAppointments = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/appointment/accepted"
			);
			this.scheduledAppointments.value = response.data;
		} catch (error: any) {
			notification(
				"Error",
				"failed to load scheduled appointments",
				"danger",
				"CloseOutline"
			);
		}
	};

	public acceptAppointment = async () => {
		try {
			await axios.post(
				import.meta.env.VITE_API_URL + "/admin/appointment/accept",
				{
					id: this.tempId.value,
				}
			);

			await this.fetchAppointmentsRequests();
			notification(
				"Success",
				"Appointment accepted successfully",
				"success",
				"Checkmark"
			);
		} catch (error: any) {
			notification(
				"Error",
				error?.response?.data?.error,
				"danger",
				"CloseOutline"
			);
		}
	};

	public rescheduleAppointment = async () => {
		try {
			await axios.put(
				import.meta.env.VITE_API_URL +
					`/admin/appointment/${this.tempId.value}`,
				{
					date: `${this.tempDate.value.getFullYear()}-${
						this.tempDate.value.getMonth() + 1
					}-${this.tempDate.value.getDate()}`,
					time: this.tempTime.value,
				}
			);
			notification(
				"Success",
				"Appointment rescheduled successfully",
				"success",
				"Checkmark"
			);
			await this.fetchAcceptedAppointments();
		} catch (error: any) {
			notification(
				"Error",
				"something went wrong",
				"danger",
				"CloseOutline"
			);
		}
	};

	public deleteAppointment = async (id: any) => {
		try {
			const response = await axios.delete(
				import.meta.env.VITE_API_URL + `/admin/appointment/${id}`
			);
			notification(
				"Success",
				"Appointment deleted successfully",
				"success",
				"Checkmark"
			);
		} catch (error: any) {
			notification(
				"Error",
				"failed to delete appointment",
				"danger",
				"CloseOutline"
			);
		}
	};
	public fetchCancelledAppointments = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/appointment/cancelled"
			);
			this.cancelledAppointments.value = response.data;
		} catch (error) {
			notification(
				"Error",
				"failed to load cancelled appointments",
				"danger",
				"CloseOutline"
			);
		}
	};
	public fetchFreeHours = async (date: string) => {
		const response = await axios.get(
			import.meta.env.VITE_API_URL +
				`/admin/appointment/free-hours/${date}`
		);

		this.freeHours.value = response.data;
	};
}

export default defineStore("admin-appointments", () => {
	return new AppointmentsStore();
});
