<template>
	<div
		class="flex flex-col gap-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"
	>
		<div class="dark:text-white text-xl font-medium">
			Appointments Requests
		</div>
		<div class="w-full space-y-4">
			<Table
				:data="appointmentsRequests"
				:fields="['Name', 'Blood Group', 'age', 'date', 'time', '']"
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
							type="light-success"
							class="p-1"
							@click="toggleAcceptAndSelect(row.id)"
						>
							<CheckIcon class="w-6 h-6" />
						</Button>
						<Button
							class="p-1 rounded-sm"
							type="danger-light"
							@click="toggleDeleteAndSelect(row.id)"
						>
							<TrashIcon class="w-6 h-6" />
						</Button>
						<Button
							type="info"
							class="p-1"
							@click="toggleInfosAndSelect(row.questions)"
						>
							<DocumentTextIcon class="w-6 h-6" />
						</Button>
					</td>
				</TableRow>
			</Table>
			<ConfirmModal
				:show="acceptModal"
				@close="toggleAcceptModal"
				@confirm="acceptAppointment"
				title="Accept Appointment"
				body="Are you sure you want to accept this appointment?"
				positive="Accept"
			/>
			<DeleteAppointmentModel
				@close="toggleDeleteModal"
				:show="deleteModal"
			/>
			<AppointmentInfos
				@close="toggleInfosModal"
				:show="infosModal"
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
	import { CheckIcon } from "@heroicons/vue/20/solid";
	import { TrashIcon } from "@heroicons/vue/20/solid";
	import { DocumentTextIcon } from "@heroicons/vue/20/solid";
	import DeleteAppointmentModel from "./DeleteAppointmentModel.vue";
	import AppointmentInfos from "./AppointmentInfos.vue";
	import useAppointmentStore from "@/stores/admin/appointments";
	import ConfirmModal from "@/components/shared/ConfirmModal.vue";

	const { tempId, answeredQuestions } = storeToRefs(useAppointmentStore());
	const acceptModal = ref(false);
	const deleteModal = ref(false);
	const infosModal = ref(false);

	const toggleAcceptModal = () => (acceptModal.value = !acceptModal.value);
	const toggleDeleteModal = () => (deleteModal.value = !deleteModal.value);
	const toggleInfosModal = () => (infosModal.value = !infosModal.value);

	function toggleAcceptAndSelect(id: any) {
		tempId.value = id;
		toggleAcceptModal();
	}
	function toggleDeleteAndSelect(id: any) {
		tempId.value = id;
		toggleDeleteModal();
	}
	function toggleInfosAndSelect(questions: any) {
		answeredQuestions.value = questions;
		toggleInfosModal();
	}

	const { fetchAppointmentsRequests, acceptAppointment } =
		useAppointmentsStore();
	const { appointmentsRequests } = storeToRefs(useAppointmentsStore());

	onMounted(async () => {
		await fetchAppointmentsRequests();
	});
</script>

<style scoped></style>
