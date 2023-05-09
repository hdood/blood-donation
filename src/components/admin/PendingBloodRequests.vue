<template>
	<div
		class="flex flex-col gap-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"
	>
		<div class="dark:text-white text-xl font-medium">Requests</div>
		<div class="w-full space-y-4">
			<Table
				:data="requests"
				:fields="['description', 'Blood Group', '']"
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
					<td class="gap-3 flex justify-center py-2 items-center">
						<Button
							type="light-success"
							class="p-1"
							@click="accept(row.id)"
						>
							<CheckIcon class="w-6 h-6" />
						</Button>
						<Button
							class="p-1 rounded-sm"
							type="danger-light"
							@click="reject(row.id)"
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
	import TableRow from "@/components/shared/TableRow.vue";
	import axios from "axios";
	import notification from "@/helpers/notification";
	import Donor from "@/models/Donor";
	import Button from "@/components/shared/Button.vue";
	import { CheckIcon } from "@heroicons/vue/20/solid";
	import { TrashIcon } from "@heroicons/vue/20/solid";

	const requests = ref([]);
	async function accept(id: any) {
		try {
			const data = new FormData();

			data.append("id", id);
			axios.post(
				import.meta.env.VITE_API_URL +
					`/admin/blood-request/accept/${id}`,
				data
			);
			notification(
				"Success",
				"request accepted successfully",
				"success",
				"Checkmark"
			);
			await fetchRequests();
		} catch (error: any) {
			notification(
				"Error",
				"failed to accept request",
				"danger",
				"CloseOutline"
			);
		}
	}

	async function reject(id: any) {
		try {
			const data = new FormData();

			data.append("id", id);
			axios.post(
				import.meta.env.VITE_API_URL +
					`/admin/blood-request/reject/${id}`,
				data
			);

			notification(
				"Success",
				"request rejected successfully",
				"success",
				"Checkmark"
			);
			await fetchRequests();
		} catch (error: any) {
			notification(
				"Error",
				"failed to reject request",
				"danger",
				"CloseOutline"
			);
		}
	}
	async function fetchRequests() {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/blood-requests/pending"
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
	}

	onMounted(async () => {
		await fetchRequests();
	});
</script>

<style scoped></style>
