<template>
	<div>
		<table
			class="w-full table-auto h-[30rem] overflow-hidden p-1 space-y-5 text-sm text-left text-gray-500 dark:text-gray-400"
		>
			<thead
				class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-500 dark:text-white"
			>
				<tr>
					<th scope="col" class="px-6 py-3 text-center">Name</th>
					<th scope="col" class="px-6 py-3 text-center">
						Blood Type
					</th>
					<th scope="col" class="px-6 py-3 text-center">Phone</th>
					<th scope="col" class="px-6 py-3 text-center">Email</th>
					<th scope="col" class="px-6 py-3 text-center">Address</th>
				</tr>
			</thead>
			<tbody>
				<DonorRow v-for="donor in donors" :donor="donor" />
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import { onMounted } from "vue";
	import DonorRow from "./DonorRow.vue";

	const donorsStore = useDonorsStore();

	const { fetchDonors } = donorsStore;
	const { donors } = storeToRefs(donorsStore);

	onMounted(() => {
		fetchDonors();
	});
</script>

<style scoped></style>
