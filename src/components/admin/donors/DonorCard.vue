<template>
	<div class="p-5 bg-secondary rounded-xl dark:bg-slate-600 relative">
		<div class="flex items-center gap-8">
			<img
				src="/donor_placeholder.png"
				class="rounded-xl overflow-hidden w-52"
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
				<span> Born in : {{ selectedDonor.dob }} </span>
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
				<div class="flex space-x-5 justify-end">
					<Button
						class="w-14 h-10 flex items-center justify-center"
						@click="toggleDeleteDialog"
						type="danger-light"
					>
						<Trash class="w-6 h-6 fill-red-700" />
					</Button>
					<Button
						class="w-14 h-10 flex items-center justify-center"
						type="success"
					>
						<EditPencil class="w-6 h-6 fill-green-700" />
					</Button>
					<Button
						class="w-14 h-10 flex items-center justify-center"
						@click="toggleDonorCardPreview"
						type="info"
					>
						<CreditCard class="w-6 h-6 fill-blue-700" />
					</Button>
				</div>
			</div>
		</div>

		<deleteDonorDialog />
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import Button from "@/components/shared/Button.vue";
	import deleteDonorDialog from "@/components/admin/donors/deleteDonorDialog.vue";

	const { selectedDonor } = storeToRefs(useDonorsStore());

	const { toggleDonorCardPreview, toggleDeleteDialog } = useDonorsStore();
</script>

<style scoped></style>
