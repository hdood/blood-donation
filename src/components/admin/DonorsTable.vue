<template>
	<div class="w-11/12 mx-auto mt-5">
		<table
			class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden"
		>
			<thead
				class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-500 dark:text-white"
			>
				<tr>
					<th scope="col" class="px-6 py-3 text-center">Name</th>
					<th scope="col" class="px-6 py-3 text-center">Gender</th>
					<th scope="col" class="px-6 py-3 text-center">Phone</th>
					<th scope="col" class="px-6 py-3 text-center">Email</th>
					<th scope="col" class="px-6 py-3 text-center">Address</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
					v-for="donor in donors"
				>
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
					>
						{{ donor.name }}
					</th>
					<td class="px-6 py-4 dark:text-white text-center">
						{{ donor.gender }}
					</td>
					<td class="px-6 py-4 dark:text-white text-center">
						{{ donor.phone }}
					</td>
					<td class="px-6 py-4 dark:text-white text-center">
						{{ donor.email }}
					</td>
					<td class="px-6 py-4 dark:text-white text-center">
						{{ donor.address }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import { onMounted } from "vue";

	const donorsStore = useDonorsStore();

	const { fetchDonors } = donorsStore;
	const { donors } = storeToRefs(donorsStore);

	onMounted(() => {
		fetchDonors();
	});
</script>

<style scoped></style>
