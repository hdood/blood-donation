import useDonorAuthStore from "@/stores/donor/auth";
import { storeToRefs } from "pinia";

export default async (to: any) => {
	const { authenticated } = storeToRefs(useDonorAuthStore());
	const { fetchAndAuthenticate } = useDonorAuthStore();

	await fetchAndAuthenticate();

	if (!authenticated.value && to.name != "donor-login") {
		return { name: "donor-login" };
	}

	if (to.name == "donor-login" && authenticated.value) {
		return { name: "donor-dashboard" };
	}
};
