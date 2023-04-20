import { defineStore, storeToRefs } from "pinia";

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

	public tempDonor = ref({
		name: "",
		phone: "",
		address: "",
		password: "",
		cpassword: "",
		email: "",
		gender: "",
		rhFactor: false,
		dob: "",
		bloodType: "",
	});

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
	public update = async () => {};

	// * Store Donor
	public save = async () => {
		const donor = new Donor(
			undefined,
			this.tempDonor.name,
			this.tempDonor.dob,
			this.tempDonor.address,
			this.tempDonor.phone,
			this.tempDonor.email,
			this.tempDonor.password,
			this.tempDonor.gender,
			this.tempDonor.bloodType,
			this.tempDonor.rhFactor
		);
		const { data } = await donor.save();

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

	private fetchCurrentPage() {
		this.fetchDonors(
			`http://localhost:8000/api/admin/donor?page=${this.paginationData.value.current_page}`
		);
	}
}

export default defineStore("admin-donors", () => {
	return new DonorsStore();
});
