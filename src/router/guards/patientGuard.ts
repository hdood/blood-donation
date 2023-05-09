import usePatientAuthStore from "@/stores/patient/auth";
import { storeToRefs } from "pinia";

export default async (to: any) => {
	const { authenticated } = storeToRefs(usePatientAuthStore());
	const { fetchAndAuthenticate } = usePatientAuthStore();

	await fetchAndAuthenticate();

	if (!authenticated.value && to.name != "donor-login") {
		return { name: "patient-login" };
	}

	if (to.name == "donor-login" && authenticated.value) {
		return { name: "patient-home" };
	}
};
