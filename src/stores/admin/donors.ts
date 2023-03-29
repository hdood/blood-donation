import { defineStore } from "pinia";

import Donor from "@/models/Donor";
import { type Ref, ref } from "vue";

class DonorsStore {
	public donors: Ref<Donor[]> = ref([]);
	public currentDonor: Ref<Donor | boolean> = ref(false);
	public editing: Ref<boolean> = ref(false);

	public fetchDonors = async () => {
		this.donors.value = await Donor.all();
		console.log(this.donors.value);
	};
}

export default defineStore("admin-donors", () => {
	return new DonorsStore();
});
