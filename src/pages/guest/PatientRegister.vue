<template>
	<div class="w-screen h-screen flex items-center justify-center bg-primary">
		<div class="flex items-center justify-center bg-white rounded-lg">
			<div class="flex flex-col gap-4 mt-3 p-4 rounded-lg">
				<img
					src="/patient-register.jpg"
					class="h-[20rem]"
					alt="blood donation"
				/>
				<div
					class="sm text-gray-700 text-center"
					v-if="registerUsingProvider"
				>
					Enter your information's to complete the sign up precess
				</div>
				<div v-else>
					<div
						class="w-60 border-gray-500 mx-auto text-center font-medium text-lg"
					>
						Or continue with
					</div>
					<div class="w-40 mx-auto text-center">
						<div
							ref="googleButton"
							class="flex justify-center"
						></div>
					</div>
				</div>
			</div>

			<div class="flex pt-4 flex-col gap-4 bg-white pl-4">
				<div class="text-2xl font-medium">Register as a Patient</div>
				<PatientGoogleRegisterForm v-if="registerUsingProvider" />
				<PatientRegisterForm v-else />
			</div>
		</div>
		<DarkModeSwitch class="absolute bottom-5 right-5" />
		<RouterLink to="/">
			<Button
				type="primary"
				class="absolute top-5 left-5 p-2"
			>
				<ArrowThinLeft class="w-5 h-5" />
			</Button>
		</RouterLink>
	</div>
</template>

<script setup lang="ts">
	import useAuthStore from "@/stores/patient/auth";
	import DarkModeSwitch from "@/components/shared/DarkModeSwitch.vue";
	import PatientRegisterForm from "@/components/guest/PatientRegisterForm.vue";
	import PatientGoogleRegisterForm from "@/components/guest/PatientGoogleRegisterForm.vue";
	import Button from "@/components/shared/Button.vue";
	import notification from "@/helpers/notification";

	import { onMounted, ref } from "vue";
	import { useRouter } from "vue-router";

	const { saveCredential, checkGoogleUser } = useAuthStore();
	const googleButton = ref(null);
	const router = useRouter();

	const registerUsingProvider = ref(false);

	const ID_CONFIGURATION = {
		client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
		callback: (payload: any) => {
			registerUsingProvider.value = true;
			saveCredential(payload);
			checkGoogleUser(payload, router);
		},
	};
	onMounted(() => {
		try {
			window.google.accounts.id.initialize(ID_CONFIGURATION);
			window.google.accounts.id.renderButton(googleButton.value, {
				type: "standard",
				size: "large",
				theme: "filled_blue",
			});
		} catch (error: any) {
			notification(
				"Error",
				"Google Login is not available",
				"danger",
				"CloseOutline"
			);
		}
	});
</script>

<style scoped></style>
