import useDonorAuthStore from "@/stores/donor/auth";
import { storeToRefs } from "pinia";

export default (to: any) => {
	// TODO : remove the return statement to activate the guard

	// console.error("admin guard is deactivated");

	// return;

	const { authenticated, currentUser } = storeToRefs(useDonorAuthStore());

	authenticated.value = !(
		localStorage.getItem("donor_authenticated") === "false" ||
		!localStorage.getItem("donor_authenticated")
	);

	currentUser.value = JSON.parse(localStorage.getItem("donor_user") || "{}");

	if (!authenticated.value && to.name != "donor-login") {
		return { name: "donor-login" };
	}

	if (to.name == "donor-login" && authenticated.value) {
		return { name: "donor-home" };
	}
};
