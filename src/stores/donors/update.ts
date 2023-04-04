import Donor from "@/models/Donor";
import { defineStore } from "pinia";
import { ref } from "vue";

class updateStore {
	public tempDonor = new Donor();

	public editing = ref(false);
	public toggleEditing = () => (this.editing.value = !this.editing.value);
}

export default defineStore("donor-update", () => {
	return new updateStore();
});
