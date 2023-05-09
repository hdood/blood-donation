<template>
	<div
		class="w-full h-screen grid place-items-center bg-primary dark:bg-slate-700"
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
				v-if="error"
			>
				{{ error }}
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
						<Button
							class="py-1 mx-auto w-11/12 text-lg grid place-items-center"
							type="primary"
							:loading="loading"
							>Login</Button
						>
						<RouterLink
							to="#"
							class="float-right mt-2 mr-4 underline"
							>Forgot password?</RouterLink
						>
					</div>
					<div class="text-center mt-14 dark:text-white">
						Don't have an account?
						<RouterLink
							to="/admin/register"
							class="underline"
							>Sign up
						</RouterLink>
					</div>
				</div>
			</form>
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
	import DarkModeSwitch from "@/components/shared/DarkModeSwitch.vue";
	import useAuthStore from "@/stores/admin/auth";
	import { storeToRefs } from "pinia";
	import Input from "@/components/shared/Input";
	import Button from "@/components/shared/Button.vue";
	import Logo from "@/icons/Logo.vue";
	import { useRouter } from "vue-router";

	const authStore = useAuthStore();

	const { login } = authStore;
	const router = useRouter();
	const { email, password, loading, error } = storeToRefs(authStore);
</script>

<style scoped>
	body,
	html {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
