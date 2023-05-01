import { defineStore } from "pinia";

import Patient from "@/models/Patient";
import { type Ref, ref } from "vue";
import notification from "@/helpers/notification";

class PatientsStore {
	public patients: Ref<Patient[]> = ref([]);
	public selectedPatient: any = ref(false);
	public editing: Ref<boolean> = ref(false);

	public cardLoading = ref(false);

	public tempPatient = ref(new Patient());

	public paginationData: any = ref({});

	// * display confirmation message when deleting patient

	public deleteDialog = ref(false);
	public toggleDeleteDialog = () =>
		(this.deleteDialog.value = !this.deleteDialog.value);

	// * Open and close add patient modal

	public addPatientModal = ref(false);
	public toggleAddPatientModal = () =>
		(this.addPatientModal.value = !this.addPatientModal.value);

	public updatePatientModal = ref(false);

	public toggleUpdatePatientModal = () =>
		(this.updatePatientModal.value = !this.updatePatientModal.value);

	// * fetch Patients
	public fetchPatients = async (page: number = 1) => {
		const { patients, data } = await Patient.all(page);
		this.patients.value = patients;
		this.paginationData.value = data;
	};

	// * Update Patient
	public update = async (patient: any) => {
		patient = new Patient(
			patient.value.id,
			patient.value.name,
			patient.value.dob,
			undefined,
			undefined,
			patient.value.address,
			patient.value.gender,
			patient.value.phone
		);
		try {
			const { data } = await patient.update();

			this.toggleUpdatePatientModal();
			this.fetchCurrentPage();
			notification(
				"Success",
				"Patient updated successfully",
				"success",
				"Checkmark"
			);

			this.selectedPatient.value = new Patient(
				data.patient.id,
				data.patient.name,
				data.patient.dob,
				data.patient.email,
				data.patient.password,
				data.patient.address,
				data.patient.gender,
				data.patient.phone
			);
		} catch (error: any) {
			console.log(error);
			this.toggleUpdatePatientModal();

			notification(
				"Error",
				"failed to update patient",
				"danger",
				"CloseOutline"
			);
		}
	};
	// * Store Patient
	public save = async () => {
		const { data } = await this.tempPatient.value.save();

		if (data.error === "true") throw Error("something went wrong");

		this.fetchCurrentPage();
		this.addPatientModal.value = false;
		notification(
			"success",
			"patient updated successfully",
			"success",
			"Checkmark"
		);
	};

	// * Delete Patient
	public deletePatient = async () => {
		try {
			const { data } = await this.selectedPatient.value?.delete();

			this.toggleDeleteDialog();
			notification(
				"success",
				"patient deleted successfully",
				"success",
				"Checkmark"
			);

			this.fetchCurrentPage();
			this.selectedPatient.value = this.getNextPatient();
		} catch (error: any) {
			this.toggleDeleteDialog();
			notification(
				"error",
				"failed to delete user",
				"danger",
				"CloseOutline"
			);
		}
	};

	public searchByName = async (name: string) => {
		const { patients, data } = await Patient.searchByName(name);
		this.patients.value = patients;
		this.paginationData.value = data;
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

	private fetchCurrentPage() {
		// TODO : add a page param to this function
		this.fetchPatients(1);
	}
}

export default defineStore("admin-patients", () => {
	return new PatientsStore();
});
