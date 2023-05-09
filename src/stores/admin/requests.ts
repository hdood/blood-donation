import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import useDonorsStore from "@/stores/admin/donors";
import axios from "axios";
import Donor from "@/models/Donor";
import notification from "@/helpers/notification";

class RequestsStore {
	public requests = ref([]);
	public paginationData = ref({});
	fetchRequests = async (page: number = 1, query: string = "") => {
		try {
			const { donors: requests, data } = await Donor.fetchInactiveDonors(
				page,
				query
			);
			this.requests.value = requests;
			this.paginationData.value = data;
		} catch (error: any) {
			notification(
				"Error",
				"failed to fetch requests",
				"danger",
				"CloseOutline"
			);
		}
	};
}

export default defineStore("admin-requests", () => {
	return new RequestsStore();
});
