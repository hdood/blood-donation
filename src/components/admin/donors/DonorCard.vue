<template>
	<div class="p-5 bg-secondary rounded-xl dark:bg-slate-600 relative">
		<div class="flex items-center gap-8">
			<img
				src="/doctor.jpeg"
				class="rounded-lg"
				alt=""
			/>
			<div class="dark:text-white space-y-2">
				<div>
					<span class="text-xl block">
						{{ selectedDonor.name }}
					</span>
				</div>
				<div>
					<span>
						{{ selectedDonor.phone }}
					</span>
				</div>
				<div>
					<span class="opacity-90">
						{{ selectedDonor.email }}
					</span>
				</div>
			</div>
		</div>
		<div class="mt-4 px-8 dark:text-white space-y-4">
			<div>
				<span>
					{{ selectedDonor.bloodTypeString }}
				</span>
			</div>
			<div>
				<span class="block opacity-80 h-12">
					{{ selectedDonor.address }}
				</span>
			</div>
			<div class="space-y-5">
				<span class="opacity-60">Donations history : </span>
				<table
					class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg overflow-scroll"
				>
					<thead
						class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-500 dark:text-white"
					>
						<tr>
							<th
								scope="col"
								class="px-6 py-3 text-center"
							>
								date
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-center"
							>
								Location
							</th>
						</tr>
					</thead>
					<tbody v-if="selectedDonor.donations">
						<tr v-for="donation in selectedDonor.donations">
							<td class="px-6 py-4 dark:text-white text-center">
								{{ donation.date }}
							</td>
							<td class="px-6 py-4 dark:text-white text-center">
								{{ donation.location }}
							</td>
						</tr>
					</tbody>
				</table>
				<div
					v-if="!selectedDonor.donations"
					class="text-center font-medium"
				>
					No donations
				</div>
				<div>
					<Button
						type="primary"
						class="px-2 py-1"
						:loading="cardLoading"
						@click="printCard"
						>Print Card</Button
					>
				</div>
			</div>
		</div>

		<div class="absolute top-2 right-4 cursor-pointer">
			<DonorCardOptions />
		</div>
		<deleteDonorDialog />
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import DonorCardOptions from "@/components/admin/donors/DonorCardOptions.vue";
	import Button from "@/components/shared/Button.vue";
	import deleteDonorDialog from "@/components/admin/donors/deleteDonorDialog.vue";

	const { selectedDonor, cardLoading } = storeToRefs(useDonorsStore());

	const { printCard } = useDonorsStore();
</script>

<style scoped></style>
