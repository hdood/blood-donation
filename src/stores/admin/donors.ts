import { defineStore } from "pinia";

import Donor from "@/models/Donor";
import { type Ref, ref } from "vue";

class DonorsStore {
	public donors: Ref<Donor[]> = ref([]);
	public fetchDonors = async () => {
		this.donors.value = await Donor.all();
	};
}

export default defineStore("admin-donors", () => {
	return new DonorsStore();
});
