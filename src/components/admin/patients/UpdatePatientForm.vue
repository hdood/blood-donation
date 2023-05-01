<template>
	<div class="h-[30rem] w-[30rem] overflow-y-scroll p-4">
		<form class="space-y-4">
			<Input
				name="Name"
				v-model="tempPatient.name"
			/>
			<Input
				name="Address"
				as="textarea"
				v-model="tempPatient.address"
			/>
			<Input
				name="Phone"
				v-model="tempPatient.phone"
			/>
			<div class="space-y-3">
				<span class="opacity-70 text-lg"> Gender </span>
				<GenderPicker v-model="tempPatient.gender" />
			</div>

			<div class="space-y-3">
				<div class="opacity-70 text-lg">Date Of Birth</div>
				<BirthDatePicker
					:initial-date="selectedPatient?.dob"
					class="h-10 z-50"
					v-model="tempPatient.dob"
				/>
			</div>
		</form>
	</div>
	<div class="flex justify-end p-4">
		<Button
			type="primary"
			class="w-20 h-10"
			@click="submit"
			>Submit</Button
		>
	</div>
</template>

<script setup lang="ts">
	import Input from "@/components/shared/Input";
	import usePatientsStore from "@/stores/admin/patients";
	import BirthDatePicker from "@/components/shared/DatePicker/BirthDatePicker.vue";
	import GenderPicker from "@/components/shared/GenderPicker.vue";
	import Button from "@/components/shared/Button.vue";
	import { ref } from "vue";
	const { selectedPatient, update } = usePatientsStore();

	const tempPatient = ref({
		id: selectedPatient?.id,
		name: selectedPatient?.name,
		gender: selectedPatient?.gender,
		phone: selectedPatient?.phone,
		address: selectedPatient?.address,
		dob: selectedPatient?.dob,
	});

	function submit() {
		update(tempPatient);
	}
</script>

<style scoped></style>
