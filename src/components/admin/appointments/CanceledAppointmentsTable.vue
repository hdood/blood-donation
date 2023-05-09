<template>
	<div
		class="flex flex-col gap-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"
	>
		<div class="dark:text-white text-xl font-medium">
			Cancelled Appointments
		</div>
		<div class="w-full space-y-4">
			<Table
				:data="cancelledAppointments"
				:fields="['Name', 'date', 'time', '']"
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
					<td>
						<Button
							class="p-1 rounded-sm"
							type="danger-light"
							@click="deleteAndFetch(row.id)"
						>
							<TrashIcon class="w-6 h-6" />
						</Button>
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
	import { TrashIcon } from "@heroicons/vue/20/solid";
	import TableRow from "@/components/shared/TableRow.vue";
	import Button from "@/components/shared/Button.vue";
	import useAppointmentsStore from "@/stores/admin/appointments";

	const { fetchCancelledAppointments, deleteAppointment } =
		useAppointmentsStore();
	const { cancelledAppointments } = storeToRefs(useAppointmentsStore());

	async function deleteAndFetch(id: any) {
		await deleteAppointment(id);
		await fetchCancelledAppointments();
	}

	onMounted(async () => {
		await fetchCancelledAppointments();
	});
</script>

<style scoped></style>
