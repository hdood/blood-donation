<template>
	<Table
		:data="patients"
		:fields="['name', 'email', 'dob']"
		class="basis-full"
		v-slot="{ row, fields }"
	>
		<TableRow
			:fields="fields"
			:row="row"
			:active="row == selectedPatient"
			@click="selectedPatient = row"
		/>
	</Table>
</template>

<script setup lang="ts">
	import Table from "@/components/shared/Table.vue";
	import usePatientsStore from "@/stores/admin/patients";
	import TableRow from "@/components/shared/TableRow.vue";
	import { onMounted } from "vue";
	import { storeToRefs } from "pinia";

	const { fetchPatients } = usePatientsStore();

	const { patients, selectedPatient } = storeToRefs(usePatientsStore());

	onMounted(() => {
		fetchPatients();
	});
</script>

<style scoped></style>
