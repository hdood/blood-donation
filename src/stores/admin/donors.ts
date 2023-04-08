import { defineStore } from "pinia";

import Donor from "@/models/Donor";
import { type Ref, ref } from "vue";
import notification from "@/helpers/notification";
import axios from "axios";
import printJS from "print-js";
class DonorsStore {
	public donors: Ref<Donor[]> = ref([]);
	public selectedDonor: any = ref(false);
	public editing: Ref<boolean> = ref(false);

	public cardLoading = ref(false);

	public tempDonor = new Donor();

	public paginationData: any = ref({});

	// * display confirmation message when deleting donor

	public deleteDialog = ref(false);
	public toggleDeleteDialog = () =>
		(this.deleteDialog.value = !this.deleteDialog.value);

	// * Open and close add donor modal

	public addDonorModal = ref(false);

	public toggleAddDonorModal = () =>
		(this.addDonorModal.value = !this.addDonorModal.value);

	// * fetch Donors
	public fetchDonors = async (
		link: string = "http://localhost:8000/api/admin/donor"
	) => {
		const { donors, data } = await Donor.all(link);
		this.donors.value = donors;
		this.paginationData.value = data;
	};

	// * Update Donor
	public update = async () => {
		const { data } = await this.tempDonor.update();

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

	// * Store Donor
	public save = async () => {
		const { data } = await this.tempDonor.save();

		if (data.error === "true") throw Error("something went wrong");

		this.fetchCurrentPage();

		this.addDonorModal.value = false;
		notification(
			"success",
			"Donor updated successfully",
			"success",
			"Checkmark"
		);
		this.resetTempDonor();
	};

	// * Delete Donor
	public deleteDonor = async () => {
		const { data } = await this.selectedDonor.value?.delete();

		if (data.error === "true") {
			notification("error", "failed to delete user", "danger", "Delete");
			throw Error("failed to delete donor");
		}
		this.deleteDialog.value = false;
		notification(
			"success",
			"Donor deleted successfully",
			"success",
			"Checkmark"
		);

		this.fetchCurrentPage();
		this.selectedDonor.value = this.getNextDonor();
		debugger;
	};

	public printCard = async () => {
		this.cardLoading.value = true;

		printJS(
			import.meta.env.VITE_ADMIN_API_BASE_URL +
				`/donor/card/${this.selectedDonor.value.id}`
		);
		this.cardLoading.value = false;
	};

	private getNextDonor() {
		const nextDonor = this.donors.value.find((donor, index) => {
			if (
				this.donors.value?.[index - 1]?.id ==
				this.selectedDonor.value.id
			) {
				return true;
			}
		});
		return nextDonor;
	}
	private resetTempDonor() {
		this.tempDonor.name.value = "";
		this.tempDonor.email.value = "";
		this.tempDonor.phone.value = "";
		this.tempDonor.address.value = "";
		this.tempDonor.bloodType.value = "";
		this.tempDonor.rhFactor.value = true;
	}
	private fetchCurrentPage() {
		this.fetchDonors(
			`http://localhost:8000/api/admin/donor?page=${this.paginationData.value.current_page}`
		);
	}
}

export default defineStore("admin-donors", () => {
	return new DonorsStore();
});
