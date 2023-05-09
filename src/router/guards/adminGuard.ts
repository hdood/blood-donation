import useAdminAuthStore from "@/stores/admin/auth";
import { storeToRefs } from "pinia";

export default async (to: any) => {
	// TODO : remove the return statement to activate the guard

	// console.error("admin guard is disactivated");

	// return;

	const { authenticated } = storeToRefs(useAdminAuthStore());
	const { fetchAndAuthenticate } = useAdminAuthStore();

	await fetchAndAuthenticate();

	if (!authenticated.value && to.name != "admin-login") {
		return { name: "admin-login" };
	}

	if (to.name == "admin-login" && authenticated.value) {
		return { name: "admin-dashboard" };
	}
};
