import { defineStore } from "pinia";

import Patient from "@/models/Patient";
import { type Ref, ref } from "vue";
import notification from "@/helpers/notification";

class PatientsStore {
	public patients: Ref<Patient[]> = ref([]);
	public selectedPatient: any = ref(false);
	public editing: Ref<boolean> = ref(false);

	public cardLoading = ref(false);

	public tempPatient = new Patient();

	public paginationData: any = ref({});

	// * display confirmation message when deleting donor

	public deleteDialog = ref(false);
	public toggleDeleteDialog = () =>
		(this.deleteDialog.value = !this.deleteDialog.value);

	// * Open and close add donor modal

	public addPatientModal = ref(false);

	public toggleAddPatientModal = () =>
		(this.addPatientModal.value = !this.addPatientModal.value);

	// * fetch Patients
	public fetchPatients = async (
		link: string = "http://localhost:8000/api/admin/patient"
	) => {
		const { patients, data } = await Patient.all(link);
		this.patients.value = patients;
		this.paginationData.value = data;
	};

	// * Update Patient
	public update = async () => {
		const { data } = await this.tempPatient.update();

		if (data.error === "true") return false;

		this.fetchCurrentPage();

		this.editing.value = false;
		notification(
			"success",
			"user updated successfully",
			"success",
			"Checkmark"
		);
	};

	// * Store Patient
	public save = async () => {
		const { data } = await this.tempPatient.save();

		if (data.error === "true") throw Error("something went wrong");

		this.fetchCurrentPage();
		this.addPatientModal.value = false;
		notification(
			"success",
			"patient updated successfully",
			"success",
			"Checkmark"
		);
		this.resetTempPatient();
	};

	// * Delete Patient
	public deletePatient = async () => {
		console.log("called");
		const { data } = await this.selectedPatient.value?.delete();

		if (data.error === "true") {
			notification("error", "failed to delete user", "danger", "Delete");
			throw Error("failed to delete patient");
		}
		this.deleteDialog.value = false;
		notification(
			"success",
			"patient deleted successfully",
			"success",
			"Checkmark"
		);

		this.fetchCurrentPage();
		this.selectedPatient.value = this.getNextPatient();
		debugger;
	};

	private getNextPatient() {
		const nextPatient = this.patients.value.find((patient, index) => {
			if (
				this.patients.value?.[index - 1]?.id ==
				this.selectedPatient.value.id
			) {
				return true;
			}
		});
		return nextPatient;
	}
	private resetTempPatient() {
		this.tempPatient.name.value = "";
		this.tempPatient.email.value = "";
		this.tempPatient.phone.value = "";
		this.tempPatient.address.value = "";
	}

	private fetchCurrentPage() {
		this.fetchPatients(
			`http://localhost:8000/api/admin/patient?page=${this.paginationData.value.current_page}`
		);
	}
}

export default defineStore("admin-patients", () => {
	return new PatientsStore();
});
