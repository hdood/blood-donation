<template>
	<div
		class="flex flex-col space-y-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"
	>
		<div class="flex justify-between">
			<PrimaryButton
				type="primary"
				class="w-36 h-10 font-medium"
				@click="toggleAddDonorModal"
			>
				<UserAdd class="w-5 mb-2 inline" />
				<span class="ml-2">Add Donor</span>
			</PrimaryButton>

			<div class="flex rounded-xl gap-3 bg-white px-2">
				<Search />
			</div>
		</div>
		<Table
			:data="donors"
			:fields="['name', 'age', 'bloodType', 'phone', 'email']"
			class="w-full h-[30rem] overflow-hidden p-1 space-y-5 text-sm text-left text-gray-500 dark:text-gray-400"
			v-slot="{ row }"
		>
			<TableRow
				:row="row"
				:fields="['name', 'age', 'bloodTypeString', 'phone', 'email']"
				:active="active(row)"
				:key="row.id"
				@click="selectedDonor = row"
			/>
		</Table>
		<Pagination
			class="self-end pt-3 mr-7"
			:pagination-data="paginationData"
			:fetch="fetchDonors"
		/>
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import { onMounted } from "vue";
	import Pagination from "@/components/shared/Pagination.vue";
	import Table from "@/components/shared/Table.vue";
	import PrimaryButton from "@/components/shared/Button.vue";
	import TableRow from "@/components/shared/TableRow.vue";
	import Search from "@/components/admin/donors/DonorsSearch.vue";

	const donorsStore = useDonorsStore();

	function active(row: any) {
		return row.id == selectedDonor.value.id;
	}

	const { fetchDonors, toggleAddDonorModal } = donorsStore;
	const { donors, paginationData, selectedDonor } = storeToRefs(donorsStore);

	onMounted(() => {
		fetchDonors();
	});
</script>

<style scoped></style>
