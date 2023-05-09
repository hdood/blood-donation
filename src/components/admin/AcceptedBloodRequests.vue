<template>
	<div
		class="flex flex-col gap-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"
	>
		<div class="dark:text-white text-xl font-medium">Requests</div>
		<div class="w-full space-y-4">
			<Table
				:data="requests"
				:fields="['description', 'Blood Group']"
				header-class="bg-gradient-to-r from-teal-400 to-teal-500"
				v-slot="{ row }"
				class="w-full"
			>
				<TableRow
					class="h-12"
					:row="row"
					:key="row.id"
					:fields="['description']"
				>
					<td class="pl-5">
						{{
							Donor.parseBloodGroup(row.bloodGroup, row.rhFactor)
						}}
					</td>
				</TableRow>
			</Table>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import Table from "@/components/shared/Table.vue";
	import TableRow from "@/components/shared/TableRow.vue";
	import axios from "axios";
	import notification from "@/helpers/notification";
	import Donor from "@/models/Donor";

	const requests = ref([]);

	onMounted(async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/blood-requests/accepted"
			);

			requests.value = response.data;
		} catch (error: any) {
			notification(
				"Error",
				"failed to fetch accepted requests",
				"danger",
				"CloseOutline"
			);
		}
	});
</script>

<style scoped></style>
