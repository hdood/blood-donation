<template>
	<div class="w-full grid place-items-center bg-primary dark:bg-slate-700">
		<div
			class="rounded-2xl p-3 bg-white shadow-lg dark:bg-slate-500 wrapper"
		>
			<div
				class="w-full mb-5 text-xl select-none dark:text-white flex flex-col items-center gap-3"
			>
				<Logo class="w-20 h-20" />
				<span>Register</span>
			</div>

			<form
				class="flex flex-col gap-5"
				@submit.prevent="submit"
			>
				<Input
					type="text"
					name="Name"
					v-model="tempUser.name"
					:error="errors.name"
				/>
				<Input
					type="email"
					name="Email"
					v-model="tempUser.email"
					:error="errors.email"
				/>
				<div class="space-y-2">
					<label
						class="opacity-70 text-lg"
						for="dob"
					>
						Date Of Birth
					</label>
					<div class="flex flex-col">
						<div class="h-10 self-center z-50">
							<BirthDatePicker
								class="self-center"
								v-model="tempUser.dob"
							/>
						</div>
						<span
							class="mt-3 text-sm italic text-red-600"
							v-if="errors.dob"
						>
							{{ errors.dob }}
						</span>
					</div>
				</div>

				<Input
					name="Phone"
					type="text"
					v-model="tempUser.phone"
					:error="errors.phone"
				/>
				<Input
					name="Address"
					type="text"
					v-model="tempUser.address"
					:error="errors.address"
				/>
				<Input
					name="password"
					type="password"
					:error="errors.password"
					v-model="tempUser.password"
				/>
				<Input
					name="password confirmation"
					type="password"
					:error="errors.cpassword"
					v-model="tempUser.cpassword"
				/>
				<div class="w-full flex justify-between mt-7 px-4">
					<span>
						Have an account?
						<RouterLink
							class="underline"
							to="/admin/login"
							>sign in</RouterLink
						>
					</span>
					<Button
						type="primary"
						class="w-20 h-10"
					>
						Submit
					</Button>
				</div>
			</form>
		</div>
		<DarkModeSwitch class="fixed bottom-5 right-5" />
	</div>
</template>

<script setup lang="ts">
	import DarkModeSwitch from "@/components/shared/DarkModeSwitch.vue";
	import Input from "@/components/shared/Input";
	import Button from "@/components/shared/Button.vue";
	import useAuthStore from "@/stores/admin/auth";
	import { ref } from "vue";
	import intus from "intus";
	import { isRequired, isEmail, isMin, isSame } from "intus/rules";
	import BirthDatePicker from "@/components/shared/DatePicker/BirthDatePicker.vue";
	import { useRouter } from "vue-router";
	import Logo from "@/icons/Logo.vue";

	const tempUser = ref({
		name: "",
		email: "",
		password: "",
		cpassword: "",
		phone: "",
		address: "",
		dob: "",
	});

	const { register } = useAuthStore();
	const router = useRouter();

	const errors = ref({});

	function submit() {
		errors.value = {};
		const validation = intus.validate(
			tempUser.value,
			{
				email: [isEmail(), isRequired()],
				name: [isRequired()],
				dob: [isRequired()],
				phone: [isRequired()],
				password: [isRequired(), isMin(8)],
				cpassword: [isRequired(), isSame("password")],
				address: [isRequired()],
			},
			{
				cpassword: "password confirmation",
			}
		);

		if (!validation.passes()) {
			errors.value = validation.errors();
			return;
		}

		register(tempUser.value, router);
	}
</script>

<style scoped>
	body,
	html {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	.wrapper {
		width: 30rem;
	}
</style>
