import useAdminAuthStore from "@/stores/admin/auth";
import { storeToRefs } from "pinia";

export default (to) => {
	// TODO : remove the return statement to activate the guard

	// console.error("admin guard is disactivated");

	// return;

	const { authenticated, currentUser } = storeToRefs(useAdminAuthStore());

	authenticated.value = !(
		localStorage.getItem("authenticated") === "false" ||
		!localStorage.getItem("authenticated")
	);

	currentUser.value = JSON.parse(localStorage.getItem("user"));

	if (!authenticated.value && to.name != "admin-login") {
		return { name: "admin-login" };
	}
	if (to.name == "admin-login" && authenticated.value) {
		return { name: "admin-dashboard" };
	}
};
