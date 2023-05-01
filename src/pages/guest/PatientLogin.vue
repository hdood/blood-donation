<template>
	<div
		class="w-full h-screen flex flex-col gap-3 items-center justify-center bg-primary dark:bg-slate-700"
	>
		<div
			class="w-96 rounded-2xl px-3 py-6 bg-white shadow-lg dark:bg-slate-500 wrapper"
		>
			<div
				class="w-full mb-5 text-xl select-none dark:text-white flex flex-col items-center gap-3"
			>
				<Logo class="w-20 h-20" />
				<span>Login</span>
			</div>
			<div
				class="text-center italic text-sm text-red-600"
				v-if="errors"
			>
				{{ errors }}
			</div>
			<form
				class="space-y-6"
				@submit.prevent="login(router)"
			>
				<div class="space-y-7">
					<Input
						name="email"
						type="email"
						v-model="email"
						errorMsg="this field must be a valid email"
					/>
					<Input
						name="password"
						type="password"
						v-model="password"
					/>
				</div>
				<div class="flex flex-col">
					<div class="dark:text-white">
						<PrimaryButton
							class="py-1 mx-auto w-11/12 text-lg grid place-items-center"
							type="primary"
							:loading="loading"
							>Login</PrimaryButton
						>
						<RouterLink
							to="#"
							class="float-right mt-2 mr-4 underline"
							>Forgot password?</RouterLink
						>
					</div>
					<div class="text-center mt-6 dark:text-white">
						Don't have an account?
						<RouterLink
							to="/donor/register"
							class="underline"
							>Sign up
						</RouterLink>
					</div>
				</div>
			</form>
		</div>
		<div class="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
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
		<DarkModeSwitch class="absolute bottom-5 right-5" />
	</div>
</template>

<script setup lang="ts">
	import DarkModeSwitch from "@/components/shared/DarkModeSwitch.vue";
	import useAuthStore from "@/stores/patient/auth";
	import { storeToRefs } from "pinia";
	import Input from "@/components/shared/Input";
	import PrimaryButton from "@/components/shared/Button.vue";
	import Logo from "@/icons/Logo.vue";
	import { useRouter } from "vue-router";
	import { onMounted, ref } from "vue";

	const authStore = useAuthStore();

	const { googleLogin } = authStore;
	const googleButton = ref(null);
	const { login } = authStore;
	const router = useRouter();
	const { email, password, loading, errors } = storeToRefs(authStore);

	const ID_CONFIGURATION = {
		client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
		callback: (payload: any) => {
			googleLogin(payload, router);
		},
	};

	onMounted(() => {
		errors.value = "";
		window.google.accounts.id.initialize(ID_CONFIGURATION);

		window.google.accounts.id.renderButton(googleButton.value, {
			type: "standard",
			size: "large",
			theme: "filled_blue",
		});
	});
</script>

<style scoped>
	body,
	html {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
