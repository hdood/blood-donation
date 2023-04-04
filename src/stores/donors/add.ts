import notification from "@/helpers/notification";
import Donor from "@/models/Donor";
import { defineStore } from "pinia";
import { ref } from "vue";

class addStore {
	public tempDonor = new Donor();
	public openModal = ref(false);

	public addDonor = async () => {
		const response = await this.tempDonor.save();

		if (!response.data) {
			notification("error", "something went wrong");
		} else {
			notification("success", "Donor added successfully");
		}
		this.toggleAddModal();
	};
	public toggleAddModal() {
		this.openModal.value = !this.openModal.value;
	}
}

export default defineStore("donor-add", () => {
	return new addStore();
});
