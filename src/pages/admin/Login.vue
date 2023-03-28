<template>
	<div
		class="w-full h-screen grid place-items-center bg-primary dark:bg-slate-700"
	>
		<div class="w-96 rounded-2xl p-3 bg-white shadow-lg dark:bg-slate-500">
			<h3 class="w-full text-center text-2xl select-none dark:text-white">
				Login
			</h3>
			<form @submit.prevent="login(router)">
				<div class="space-y-8 mt-7">
					<Input
						name="email"
						type="email"
						:validation="() => validateEmail(email)"
						v-model="email"
						errorMsg="this field must be a valid email"
					/>
					<Input
						name="password"
						type="password"
						:validation="() => true"
						v-model="password"
					/>
					<div class="dark:text-white">
						<PrimaryButton
							class="py-1 mx-auto w-11/12 text-lg grid place-items-center"
							:loading="loading"
							>Login</PrimaryButton
						>
						<RouterLink
							to="#"
							class="float-right mt-2 mr-4 underline"
							>Forgot password?</RouterLink
						>
					</div>
					<div class="text-center mt-9">
						Don't have an account?
						<RouterLink to="#" class="underline"
							>Sign up
						</RouterLink>
					</div>
				</div>
			</form>
		</div>
		<DarkModeSwitch class="absolute bottom-5 right-5" />
	</div>
</template>

<script setup lang="ts">
	import DarkModeSwitch from "@/components/shared/DarkModeSwitch.vue";
	import useAuthStore from "@/stores/admin/auth";
	import { storeToRefs } from "pinia";
	import Input from "@/components/shared/Input";
	import PrimaryButton from "@/components/shared/PrimaryButton.vue";
	import validateEmail from "@/helpers/validateEmail";
	import { onMounted } from "vue";
	import { useRouter } from "vue-router";

	const authStore = useAuthStore();

	const { login } = authStore;
	const router = useRouter();
	const { email, password, loading } = storeToRefs(authStore);
</script>

<style>
	body,
	html {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
