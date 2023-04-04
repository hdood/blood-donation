import { defineStore } from "pinia";
import addStore from "./add";
import updateStore from "./update";
import deleteStore from "./delete";
import type Donor from "@/models/Donor";
import { ref, type Ref } from "vue";

class DonorsStore {
	public addStore = addStore();
	public updateStore = updateStore();
	public deleteStore = deleteStore();
	public currentDonor: any = ref(false);
}
export default defineStore("donors", () => {
	return new DonorsStore();
});
