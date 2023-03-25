<template>
	<MultiStepForm class="bg-white p-3 rounded-lg form">
		<form
			name="personal-informations"
			title="personal informations"
			class="flex flex-col h-40 w-full space-y-4"
			:validate="step1"
		>
			<Input
				:validation="() => (name == '' ? false : true)"
				name="Name"
				type="text"
				v-model="name"
			/>
			<Input
				:validation="() => validateEmail(email)"
				name="Email"
				errorMsg="this field must be a valid email"
				type="email"
				v-model="email"
			/>
			<div class="space-y-4">
				<span class="block opacity-70 text-lg">Birth Date</span>
				<BirthDatePicker />
			</div>
		</form>
		<Step
			title="contact information"
			:validate="step2"
			class="flex flex-col h-40 w-full"
		>
			<Input
				:validation="() => address != ''"
				name="Address"
				type="text"
				v-model="address"
			/>
			<Input name="Phone Number" :validation="() => true" type="text" />
		</Step>
		<Step
			class="flex flex-col h-40 min-w-full"
			title="blood information"
			:validate="step3"
		>
			<Input name="bloodType" type="text" :validation="() => true" />
		</Step>
	</MultiStepForm>
</template>

<script setup lang="ts">
	import MultiStepForm from "@/components/shared/MultiStepForm/MultiStepForm";
	import Step from "@/components/shared/MultiStepForm/Step.vue";
	import { ref } from "vue";
	import Input from "@/components/shared/Input";
	import validateEmail from "@/helpers/validateEmail";
	import BirthDatePicker from "@/components/shared/DatePicker/BirthDatePicker.vue";

	const name = ref("");
	const address = ref("");
	const email = ref("");

	function step1() {
		if (
			name.value == "" ||
			email.value == "" ||
			!validateEmail(email.value)
		)
			return false;
		return {
			name: name.value,
			email: email.value,
		};
	}

	function step2() {
		if (address.value == "") return false;
		return {
			address: address.value,
		};
	}
	function step3() {
		return {
			age: 13,
			finish: (result: object) => console.log(result),
		};
	}
</script>

<style scoped>
	.form {
		height: 70rem;
	}
</style>
