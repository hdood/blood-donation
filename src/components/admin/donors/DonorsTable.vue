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
			header-class="bg-gradient-to-r from-red-300 to-red-400"
			:data="donors"
			:fields="['name', 'age', 'bloodGroup', 'phone', 'email']"
			class="w-full h-[30rem] overflow-hidden p-1 space-y-5 text-sm text-left text-gray-500 dark:text-gray-400"
			v-slot="{ row }"
		>
			<TableRow
				:row="row"
				:fields="['name', 'age', 'bloodGroupString', 'phone', 'email']"
				active-colors="bg-gradient-to-r	 from-red-300 to-red-400 text-black"
				:active="active(row)"
				:key="row.id"
				@click="selectedDonor = row"
			/>
		</Table>
		<TailwindPagination
			class="self-end gap-6 items-center space-x-3 dark:text-white"
			:data="paginationData"
			@pagination-change-page="fetchDonors"
			item-classes="border-indigo-600  rounded-lg"
			active-classes="bg-indigo-600 border-indigo-600  rounded-lg text-white"
		/>
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import { onMounted } from "vue";
	import Table from "@/components/shared/Table.vue";
	import PrimaryButton from "@/components/shared/Button.vue";
	import TableRow from "@/components/shared/TableRow.vue";
	import Search from "@/components/admin/donors/DonorsSearch.vue";
	import { TailwindPagination } from "laravel-vue-pagination";

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
