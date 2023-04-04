import { defineStore } from "pinia";

import Donor from "@/models/Donor";
import { type Ref, ref } from "vue";
import notification from "@/helpers/notification";
class DonorsStore {
	public donors: Ref<Donor[]> = ref([]);
	public currentDonor: Ref<Donor | boolean> = ref(false);
	public editing: Ref<boolean> = ref(false);
	public notifications = ref([]);
	public addDonorModal = ref(false);

	public tempDonor = new Donor();

	public toggleAddDonorModal = () => {
		this.addDonorModal.value = !this.addDonorModal.value;
	};

	public fetchDonors = async () => {
		this.donors.value = await Donor.all();
	};
	public update = async () => {
		const response = await this.tempDonor.update();

		if (!response.data) return false;

		this.fetchDonors();

		this.editing.value = false;
		notification("", "user updated successfully");
	};
}

export default defineStore("admin-donors", () => {
	return new DonorsStore();
});
