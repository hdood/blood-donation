import useAdminAuthStore from "@/stores/admin/auth";
import { storeToRefs } from "pinia";

export default () => {
	// TODO : remove the return statement to activate the guard

	// console.error("admin guard is disactivated");

	// return;

	const { authenticated, currentUser } = storeToRefs(useAdminAuthStore());

	authenticated.value = !(localStorage.getItem("authenticated") === "false");

	if (!authenticated.value) {
		return { name: "admin-login" };
	}
	currentUser.value = JSON.parse(localStorage.getItem("user"));
};
