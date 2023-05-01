<template>
	<div class="p-5 bg-secondary rounded-xl dark:bg-slate-600 relative">
		<div class="flex space-x-5 justify-end">
			<Button
				class="w-14 h-10 flex items-center justify-center"
				@click="toggleDeleteDialog"
				type="danger-light"
			>
				<Trash class="w-6 h-6" />
			</Button>
			<Button
				class="w-14 h-10 flex items-center justify-center"
				@click="toggleUpdateDonorModal"
				type="light-success"
			>
				<EditPencil class="w-6 h-6" />
			</Button>
			<Button
				class="w-14 h-10 flex items-center justify-center"
				@click="toggleDonorCardPreview"
				type="info"
			>
				<CreditCard class="w-6 h-6" />
			</Button>
		</div>
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
					:fields="['date', 'location']"
					class="w-full h-[30rem] overflow-hidden p-1 space-y-5 text-sm text-left text-gray-500 dark:text-gray-400"
					v-slot="{ row }"
				>
					<TableRow
						:row="row"
						:fields="['date', 'location']"
						:key="row.id"
					/>
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

	const { selectedDonor } = storeToRefs(useDonorsStore());

	const {
		toggleDonorCardPreview,
		toggleDeleteDialog,
		toggleUpdateDonorModal,
	} = useDonorsStore();
</script>

<style scoped></style>
