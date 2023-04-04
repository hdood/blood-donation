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
					<input
						v-if="editing"
						class="text-xl text-black rounded-lg px-4 w-64 font-medium py-1 border focus:outline-none"
						type="text"
						v-model="tempDonor.name"
					/>
					<span
						class="text-xl block"
						v-else
					>
						{{ currentDonor.name }}
					</span>
				</div>
				<div>
					<input
						v-if="editing"
						class="text-black rounded-lg px-4 font-medium py-1 border focus:outline-none"
						type="text"
						v-model="tempDonor.phone"
					/>
					<span v-else>
						{{ currentDonor.phone }}
					</span>
				</div>
				<div>
					<input
						v-if="editing"
						class="text-black rounded-lg px-4 font-medium py-1 border focus:outline-none"
						type="text"
						v-model="tempDonor.email"
					/>
					<span
						v-else
						class="opacity-90"
					>
						{{ currentDonor.email }}
					</span>
				</div>
			</div>
		</div>
		<div class="mt-4 px-8 dark:text-white space-y-4">
			<div>
				<div
					v-if="editing"
					class="inline-flex flex-col items-center gap-5"
				>
					<BloodTypeInput />

					<RhFactorInput />
				</div>
				<span v-else>
					{{ currentDonor.bloodTypeString }}
				</span>
			</div>
			<div>
				<textarea
					v-if="editing"
					class="text-sm text-black rounded-lg px-4 w-64 font-medium py-1 border focus:outline-none"
					type="text"
					v-model="tempDonor.address"
				/>
				<span
					class="block opacity-80"
					v-else
				>
					{{ currentDonor.address }}
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
								Gender
							</th>
						</tr>
					</thead>
					<tbody v-if="false">
						<td class="px-6 py-4 dark:text-white text-center">
							test
						</td>
						<td class="px-6 py-4 dark:text-white text-center">
							test
						</td>
					</tbody>
				</table>
				<div class="text-center font-medium">No donations</div>
				<div
					v-if="editing"
					class="space-x-4 flex justify-end"
				>
					<PrimaryButton
						@click="update"
						class="px-2 py-1"
						>Update</PrimaryButton
					>
					<PrimaryOutlineButton
						class="px-2 py-1"
						@click="toggleEditing"
						>Cancel</PrimaryOutlineButton
					>
				</div>
			</div>
		</div>

		<div class="absolute top-2 right-4 cursor-pointer">
			<DonorCardOptions v-if="!editing" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/donors/donors";
	import { storeToRefs } from "pinia";
	import BloodTypeInput from "@/components/shared/BloodTypeInput.vue";
	import DonorCardOptions from "@/components/admin/DonorCardOptions.vue";
	import RhFactorInput from "../shared/RhFactorInput.vue";
	import PrimaryButton from "../shared/PrimaryButton.vue";
	import PrimaryOutlineButton from "../shared/PrimaryOutlineButton.vue";

	const { currentDonor } = storeToRefs(useDonorsStore());

	const { updateStore } = useDonorsStore();
	const { editing } = storeToRefs(updateStore);
	const { tempDonor, update, toggleEditing } = updateStore;
</script>

<style scoped></style>
