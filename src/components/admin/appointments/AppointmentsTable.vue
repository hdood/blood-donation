<template>
	<div
		class="flex flex-col w-full gap-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"
	>
		<div class="dark:text-white text-xl font-medium">
			Today's Appointments
		</div>
		<div class="w-full space-y-4">
			<Table
				:data="acceptedAppointments"
				:fields="['Name', 'Date', 'time']"
				header-class="bg-gradient-to-r from-teal-400 to-teal-500"
				v-slot="{ row }"
				class="w-full"
			>
				<TableRow
					class="h-12"
					:row="row.donor"
					:key="row.id"
					:fields="['name']"
				>
					<td>
						{{ row.date }}
					</td>
					<td>
						{{ row.time }}
					</td>
				</TableRow>
			</Table>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import Table from "@/components/shared/Table.vue";
	import { storeToRefs } from "pinia";
	import TableRow from "@/components/shared/TableRow.vue";
	import useAppointmentsStore from "@/stores/admin/appointments";
	import Donor from "@/models/Donor";

	const { fetchTodayAppointments } = useAppointmentsStore();
	const { acceptedAppointments } = storeToRefs(useAppointmentsStore());

	onMounted(async () => {
		await fetchTodayAppointments();
	});
</script>

<style scoped></style>
