import useDonorAuthStore from "@/stores/donor/auth";
import { storeToRefs } from "pinia";

export default async (to: any) => {
	const { fetchAndAuthenticate } = useDonorAuthStore();
	await fetchAndAuthenticate();
};
