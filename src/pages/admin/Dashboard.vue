<template>
	<div class="p-20">
		<div class="w-full">
			<div class="gap-5 w-full grid grid-cols-3">
				<div
					class="h-28 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl px-6 justify-center flex flex-col gap-1"
				>
					<div class="text-xl opacity-75 text-white uppercase">
						Donors
					</div>
					<div class="text-2xl text-white">
						{{ infos.donorsCount }}
					</div>
				</div>
				<div
					class="h-28 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl px-6 justify-center flex flex-col gap-1"
				>
					<div class="text-xl opacity-75 text-white uppercase">
						Patients
					</div>
					<div class="text-2xl text-white">
						{{ infos.patientsCount }}
					</div>
				</div>
				<div
					class="h-28 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl px-6 justify-center flex flex-col gap-1"
				>
					<div class="text-xl opacity-75 text-white uppercase">
						Donations
					</div>
					<div class="text-2xl text-white">
						{{ infos.donationsCount }}
					</div>
				</div>
			</div>

			<div class="w-full my-10">
				<table
					class="h-fit w-full rounded-xl overflow-hidden p-1 space-y-5 text-sm text-left text-gray-500 dark:text-gray-400"
				>
					<tr
						class="px-4 text-white dark:bg-indigo-900/50 bg-gradient-to-r from-rose-400 to-rose-500"
					>
						<th class="py-3 pl-4">A+</th>
						<th class="py-3">A-</th>
						<th class="py-3">B+</th>
						<th class="py-3">B-</th>
						<th class="py-3">AB+</th>
						<th class="py-3">AB-</th>
						<th class="py-3">O+</th>
						<th class="py-3">O-</th>
					</tr>
					<tbody>
						<tr>
							<td class="pl-4 text-xl">
								{{ infos.bloodBank?.a?.positive }}
							</td>
							<td class="text-xl">
								{{ infos.bloodBank?.a?.negative }}
							</td>
							<td class="text-xl">
								{{ infos.bloodBank?.b?.positive }}
							</td>
							<td class="text-xl">
								{{ infos.bloodBank?.b?.negative }}
							</td>
							<td class="text-xl">
								{{ infos.bloodBank?.ab?.positive }}
							</td>
							<td class="text-xl">
								{{ infos.bloodBank?.ab?.negative }}
							</td>
							<td class="text-xl">
								{{ infos.bloodBank?.o?.positive }}
							</td>
							<td class="text-xl">
								{{ infos.bloodBank?.o?.negative }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="mt-5 w-full grid grid-cols-2 gap-3">
				<AppointmentsRequestsTable />
				<AppointmentsTable />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import axios from "axios";
	import AppointmentsRequestsTable from "@/components/admin/appointments/AppointmentsRequestsTable.vue";
	import AppointmentsTable from "@/components/admin/appointments/AppointmentsTable.vue";
	import Table from "@/components/shared/Table.vue";

	const infos = ref({
		donationsCount: 0,
		donorsCount: 0,
		patientsCount: 0,
		bloodBank: [],
	});

	onMounted(async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_API_URL + "/admin/dashboard"
			);
			infos.value.donationsCount = response.data.donationsCount;
			infos.value.donorsCount = response.data.donorsCount;
			infos.value.patientsCount = response.data.patientsCount;
			infos.value.bloodBank = response.data.bloodBank;
		} catch (error: any) {}
	});
</script>

<style scoped></style>
