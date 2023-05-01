import { defineStore } from "pinia";

import Donor from "@/models/Donor";
import { type Ref, ref } from "vue";
import notification from "@/helpers/notification";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class DonorsStore {
	public donors: Ref<Donor[]> = ref([]);
	public selectedDonor: any = ref(false);
	public editing: Ref<boolean> = ref(false);

	public donorCard = ref(null);
	public showDonorCardPreview = ref(false);
	public toggleDonorCardPreview = () =>
		(this.showDonorCardPreview.value = !this.showDonorCardPreview.value);

	public tempDonor = ref(new Donor());

	public paginationData: any = ref({});

	// * display confirmation message when deleting donor

	public deleteDialog = ref(false);
	public toggleDeleteDialog = () =>
		(this.deleteDialog.value = !this.deleteDialog.value);

	// * Open and close add donor modal

	public addDonorModal = ref(false);

	public toggleAddDonorModal = () =>
		(this.addDonorModal.value = !this.addDonorModal.value);

	// * Open and close update donor modal

	public updateDonorModal = ref(false);

	public toggleUpdateDonorModal = () =>
		(this.updateDonorModal.value = !this.updateDonorModal.value);

	// * fetch Donors
	public fetchDonors = async (page: number = 1) => {
		const { donors, data } = await Donor.all(page);
		this.donors.value = donors;
		this.paginationData.value = data;
	};

	// * Store Donor
	public save = async () => {
		const { data } = await this.tempDonor.value.save();

		if (data.error === "true") throw Error("something went wrong");

		this.fetchCurrentPage();

		this.addDonorModal.value = false;
		notification(
			"success",
			"Donor updated successfully",
			"success",
			"Checkmark"
		);
	};

	// * Update Donor
	public update = async (donor: any) => {
		donor = new Donor(
			donor.value.id,
			donor.value.name,
			donor.value.dob,
			undefined,
			undefined,
			donor.value.address,
			donor.value.gender,
			donor.value.phone,
			donor.value.bloodGroup,
			donor.value.rhFactor
		);
		try {
			const { data } = await donor.update();

			this.toggleUpdateDonorModal();
			this.fetchCurrentPage();
			notification(
				"Success",
				"Donor updated successfully",
				"success",
				"Checkmark"
			);

			this.selectedDonor.value = new Donor(
				data.donor.id,
				data.donor.name,
				data.donor.dob,
				data.donor.email,
				data.donor.password,
				data.donor.address,
				data.donor.gender,
				data.donor.phone,
				data.donor.bloodGroup,
				data.donor.rhFactor
			);
		} catch (error: any) {
			this.toggleUpdateDonorModal();

			notification(
				"Error",
				"failed to update donor",
				"danger",
				"CloseOutline"
			);
		}
	};

	// * Delete Donor
	public deleteDonor = async () => {
		try {
			const { data } = await this.selectedDonor.value?.delete();
			this.deleteDialog.value = false;
			notification(
				"Success",
				"Donor deleted successfully",
				"success",
				"Checkmark"
			);

			if (
				this.selectedDonor.value.id ==
				this.donors.value[this.donors.value.length - 1].id
			) {
				this.selectedDonor.value = this.getPreviousDonor();
			} else {
				this.selectedDonor.value = this.getNextDonor();
				this.fetchCurrentPage();
			}
		} catch (error) {
			this.deleteDialog.value = false;
			notification(
				"Error",
				"failed to delete user",
				"danger",
				"CloseOutline"
			);
		}
	};

	public printCard = (el: any) => {
		html2canvas(el).then((canvas) => {
			const ratio = canvas.width / canvas.height;
			const width = 150;
			const height = width / ratio;
			const doc = new jsPDF("l", "px", [width, height]);

			doc.addImage(canvas, "png", 0, 0, width, height);
			// doc.save(this.selectedDonor.value.name.replace(" ", "_") + ".pdf");
			doc.output("dataurlnewwindow", {
				filename:
					this.selectedDonor.value.name.replace(" ", "_") + ".pdf",
			});
		});
	};
	public searchByName = async (name: string) => {
		const { donors, data } = await Donor.searchByName(name);
		this.donors.value = donors;
		this.paginationData.value = data;
		debugger;
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
	private getPreviousDonor() {
		const nextDonor = this.donors.value.find((donor, index) => {
			if (
				this.donors.value?.[index + 1]?.id ==
				this.selectedDonor.value.id
			) {
				return true;
			}
		});
		return nextDonor;
	}

	private fetchCurrentPage() {
		this.fetchDonors(this.paginationData.current_page);
	}
}

export default defineStore("admin-donors", () => {
	return new DonorsStore();
});
