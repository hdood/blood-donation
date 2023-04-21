import useAdminAuthStore from "@/stores/admin/auth";
import { storeToRefs } from "pinia";

export default async (to: any) => {
	// TODO : remove the return statement to activate the guard

	// console.error("admin guard is disactivated");

	// return;

	const { authenticated, currentUser } = storeToRefs(useAdminAuthStore());
	const { fetchUser } = useAdminAuthStore();

	authenticated.value = !(
		localStorage.getItem("authenticated") === "false" ||
		!localStorage.getItem("authenticated")
	);

	currentUser.value = JSON.parse(localStorage.getItem("user") || "{}");

	if (!authenticated.value && to.name != "admin-login") {
		if (!(await fetchUser())) return { name: "admin-login" };
	}

	if (to.name == "admin-login" && authenticated.value) {
		return { name: "admin-dashboard" };
	}
};
