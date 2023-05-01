<template>
	<div class="flex-col flex mt-10">
		<div class="w-11/12 mx-auto flex justify-between">
			<h1 class="text-lg font-medium opacity-80 dark:text-white">
				Manage Patients
			</h1>
		</div>
		<div class="flex w-11/12 mx-auto mt-5 gap-4">
			<PatientsTable class="basis-full" />

			<div
				class="basis-7/12"
				v-if="selectedPatient"
			>
				<PatientCard class="" />
			</div>
		</div>
		<UpdatePatientModal />
		<AddPatientModal />
		<DeletePatientDialog />
	</div>
</template>

<script setup lang="ts">
	import PatientsTable from "@/components/admin/patients/PatientsTable.vue";
	import usePatientsStore from "@/stores/admin/patients";
	import { storeToRefs } from "pinia";
	import AddPatientModal from "@/components/admin/patients/AddPatientModal.vue";
	import PatientCard from "@/components/admin/patients/PatientCard.vue";
	import DeletePatientDialog from "@/components/admin/patients/deletePatientDialog.vue";
	import UpdatePatientModal from "@/components/admin/patients/UpdatePatientModal.vue";

	const { selectedPatient } = storeToRefs(usePatientsStore());
</script>

<style scoped></style>
