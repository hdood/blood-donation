<template>
	<div
		class="flex flex-col space-y-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"
	>
		<div class="flex justify-between">
			<Button
				type="primary"
				class="w-36 h-10 font-medium"
				@click="toggleAddPatientModal"
			>
				<UserAdd class="w-5 mb-2 inline" />
				<span class="ml-2">Add Patient</span>
			</Button>

			<div class="flex rounded-xl gap-3 bg-white px-2">
				<Search />
			</div>
		</div>
		<Table
			:data="patients"
			:fields="['name', 'email', 'dob']"
			class="basis-full"
			v-slot="{ row, fields }"
		>
			<TableRow
				:fields="fields"
				:row="row"
				:active="active(row)"
				@click="selectedPatient = row"
			/>
		</Table>
		<Pagination
			class="self-end pt-3 mr-7"
			:pagination-data="paginationData"
			:fetch="fetchPatients"
		/>
	</div>
</template>

<script setup lang="ts">
	import Table from "@/components/shared/Table.vue";
	import usePatientsStore from "@/stores/admin/patients";
	import Search from "@/components/admin/patients/PatientsSearch.vue";
	import TableRow from "@/components/shared/TableRow.vue";
	import { onMounted } from "vue";
	import { storeToRefs } from "pinia";
	import Button from "@/components/shared/Button.vue";
	import Pagination from "@/components/shared/Pagination.vue";

	const { fetchPatients } = usePatientsStore();

	const { patients, selectedPatient, paginationData } = storeToRefs(
		usePatientsStore()
	);
	function active(row: any) {
		return row.id == selectedPatient.value.id;
	}

	onMounted(() => {
		fetchPatients();
	});
</script>

<style scoped></style>
