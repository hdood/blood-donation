import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import useDonorsStore from "@/stores/admin/donors";
import axios from "axios";
import notification from "@/helpers/notification";

class DonationsStore {
	public donationsModal = ref(false);

	public toggleDonationsModal = () =>
		(this.donationsModal.value = !this.donationsModal.value);

	public registerDonation = async (donation: any) => {
		const { selectedDonor } = storeToRefs(useDonorsStore());
		const data = new FormData();

		data.append("donor_id", selectedDonor.value.id);
		data.append("amount", donation.value.amount);
		data.append("type", donation.value.type);
		data.append("location", import.meta.env.VITE_CENTER_LOCATION);

		try {
			const response = await axios.post(
				import.meta.env.VITE_API_URL + "/admin/donation",
				data
			);

			this.toggleDonationsModal();

			selectedDonor.value.donations = response.data.donations;

			notification(
				"Success",
				"Donation registered successfully",
				"success",
				"Checkmark"
			);
		} catch (error: any) {
			this.toggleDonationsModal();
			notification(
				"Error",
				"failed to register donation",
				"danger",
				"CloseOutline"
			);
		}
	};
}

export default defineStore("admin-donations", () => {
	return new DonationsStore();
});
