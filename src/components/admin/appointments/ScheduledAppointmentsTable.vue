<template>
	<div
		class="flex flex-col gap-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"
	>
		<div class="dark:text-white text-xl font-medium">
			Scheduled Appointments
		</div>
		<div class="w-full space-y-4">
			<Table
				:data="scheduledAppointments"
				:fields="[
					'Name',
					'Blood Group',
					'age',
					'date (Y-M-D)',
					'time',
					'',
				]"
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
						{{
							Donor.parseBloodGroup(
								row.donor.bloodGroup,
								row.donor.rhFactor
							)
						}}
					</td>
					<td>
						{{ Donor.parseAge(row.donor.dob) }}
					</td>
					<td>
						{{ row.date }}
					</td>
					<td>
						{{ row.time }}
					</td>

					<td class="gap-3 flex justify-center py-2 items-center">
						<Button
							type="info"
							class="p-1"
							@click="
								toggleEditAndSelect(row.id, row.date, row.time)
							"
						>
							<PencilIcon class="w-6 h-6" />
						</Button>
					</td>
				</TableRow>
			</Table>
			<EditAppointmentModal
				@close="toggleEditModal"
				:show="acceptModal"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import Table from "@/components/shared/Table.vue";
	import { storeToRefs } from "pinia";
	import TableRow from "@/components/shared/TableRow.vue";
	import Button from "@/components/shared/Button.vue";
	import useAppointmentsStore from "@/stores/admin/appointments";
	import Donor from "@/models/Donor";
	import { PencilIcon } from "@heroicons/vue/20/solid";
	import EditAppointmentModal from "./EditAppointmentModal.vue";

	const acceptModal = ref(false);
	const deleteModal = ref(false);

	const toggleEditModal = () => (acceptModal.value = !acceptModal.value);

	function toggleEditAndSelect(id: any, date: any, time: any) {
		tempId.value = id;
		tempDate.value = date;
		tempTime.value = time;
		toggleEditModal();
	}

	const { fetchAcceptedAppointments } = useAppointmentsStore();
	const { scheduledAppointments, tempTime, tempId, tempDate } = storeToRefs(
		useAppointmentsStore()
	);

	onMounted(async () => {
		await fetchAcceptedAppointments();
	});
</script>

<style scoped></style>
