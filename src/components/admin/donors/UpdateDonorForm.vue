<template>
	<div class="h-[30rem] w-[30rem] overflow-y-scroll p-4">
		<form class="space-y-4">
			<Input
				name="Name"
				v-model="tempDonor.name"
			/>
			<Input
				name="Address"
				as="textarea"
				v-model="tempDonor.address"
			/>
			<Input
				name="Phone"
				v-model="tempDonor.phone"
			/>
			<div class="space-y-3">
				<span class="opacity-70 text-lg"> Gender </span>
				<GenderPicker v-model="tempDonor.gender" />
			</div>

			<div class="space-y-3">
				<div class="opacity-70 text-lg">Date Of Birth</div>
				<BirthDatePicker
					:initial-date="selectedDonor?.dob"
					class="h-10 z-50"
					v-model="tempDonor.dob"
				/>
			</div>

			<div class="flex flex-col gap-4 -z-20">
				<div class="space-y-3">
					<span class="opacity-70 text-lg"> Blood Group </span>
					<BloodGroupInput v-model="tempDonor.bloodGroup" />
				</div>
				<div class="space-y-3">
					<span class="opacity-70 text-lg"> Rh factor </span>
					<RhFactorInput v-model="tempDonor.rhFactor" />
				</div>
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
	import useDonorsStore from "@/stores/admin/donors";
	import BirthDatePicker from "@/components/shared/DatePicker/BirthDatePicker.vue";
	import BloodGroupInput from "@/components/shared/BloodGroupInput.vue";
	import RhFactorInput from "@/components/shared/RhFactorInput.vue";
	import GenderPicker from "@/components/shared/GenderPicker.vue";
	import Button from "@/components/shared/Button.vue";
	import { ref } from "vue";
	const { selectedDonor, update } = useDonorsStore();

	const tempDonor = ref({
		id: selectedDonor?.id,
		name: selectedDonor?.name,
		gender: selectedDonor?.gender,
		phone: selectedDonor?.phone,
		address: selectedDonor?.address,
		dob: selectedDonor?.dob,
		bloodGroup: selectedDonor?.bloodGroup,
		rhFactor: selectedDonor?.rhFactor,
	});

	function submit() {
		update(tempDonor);
	}
</script>

<style scoped></style>
