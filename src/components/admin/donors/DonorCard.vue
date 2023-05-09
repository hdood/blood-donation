<template>
	<div class="p-5 bg-secondary rounded-xl dark:bg-slate-600 relative">
		<div class="flex space-x-5 justify-between">
			<Button
				class="px-2"
				type="primary"
				@click="toggleDonationsModal"
			>
				Register Donation</Button
			>
			<div class="flex space-x-5">
				<Button
					class="w-14 h-10 flex items-center justify-center"
					@click="toggleDeleteDialog"
					type="danger-light"
				>
					<TrashIcon class="w-6 h-6" />
				</Button>
				<Button
					class="w-14 h-10 flex items-center justify-center"
					@click="toggleUpdateDonorModal"
					type="light-success"
				>
					<PencilIcon class="w-6 h-6" />
				</Button>
				<Button
					class="w-14 h-10 flex items-center justify-center"
					@click="toggleDonorCardPreview"
					type="info"
				>
					<CreditCardIcon class="w-6 h-6" />
				</Button>
			</div>
		</div>
		<div class="flex items-center gap-8 mt-3">
			<div class="dark:text-white space-y-2">
				<div class="">
					<span class="text-xl block">
						{{ selectedDonor.name }}
					</span>
					<span
						class="text-sm text-center p-1 rounded-lg cursor-pointer bloc"
						:class="[
							selectedDonor.active
								? 'bg-emerald-300 text-emerald-700 '
								: 'bg-rose-300 text-rose-700 ',
						]"
						@click="toggleActive"
					>
						{{ !selectedDonor.active ? "in" : "" }}active
					</span>
				</div>
				<div>
					<span>
						{{ selectedDonor.gender.toUpperCase() }}
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
		<div class="mt-4 dark:text-white space-y-4">
			<div>
				<span>
					<span class="opacity-80">Blood group :</span>
					{{ selectedDonor.bloodGroupString }}
				</span>
			</div>
			<div>
				<span>
					<span class="opacity-80">Born in :</span>
					{{ selectedDonor.dob }}
				</span>
			</div>
			<div>
				<span>
					<span class="opacity-80">Lives at :</span>

					{{ selectedDonor.address }}
				</span>
			</div>
			<div class="space-y-5">
				<span class="font-medium text-xl">Donations history : </span>
				<Table
					:data="selectedDonor.donations"
					:fields="['amount', 'date', 'location', 'state', 'type']"
					class="w-full h-[30rem] overflow-hidden p-1 space-y-5 text-sm text-left text-gray-500 dark:text-gray-400"
					v-slot="{ row }"
				>
					<TableRow
						:row="row"
						:fields="['amount', 'date', 'location', 'state']"
						:key="row.id"
					>
						<td>
							{{ donationToString(row.type) }}
						</td>
					</TableRow>
				</Table>

				<div
					v-if="!selectedDonor.donations"
					class="text-center font-medium"
				>
					No donations
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import Button from "@/components/shared/Button.vue";
	import Table from "@/components/shared/Table.vue";
	import TableRow from "@/components/shared/TableRow.vue";
	import useDonationsStore from "@/stores/admin/donations";
	import { CreditCardIcon } from "@heroicons/vue/20/solid";
	import { PencilIcon } from "@heroicons/vue/20/solid";
	import { TrashIcon } from "@heroicons/vue/20/solid";
	import donationToString from "@/helpers/DonationTypeLiteral";

	const { selectedDonor } = storeToRefs(useDonorsStore());

	const { toggleDonationsModal } = useDonationsStore();

	const {
		toggleDonorCardPreview,
		toggleDeleteDialog,
		toggleUpdateDonorModal,
		toggleActive,
	} = useDonorsStore();
</script>

<style scoped></style>
