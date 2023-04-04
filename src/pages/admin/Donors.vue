<template>
	<div class="flex-col flex mt-10">
		<div class="w-11/12 mx-auto flex justify-between">
			<h1 class="text-lg font-medium opacity-80 dark:text-white">
				Manage Donors
			</h1>
			<PrimaryButton
				class="float-right px-3 py-1"
				@click="toggleAddModal"
				>Add Donor</PrimaryButton
			>
		</div>
		<div class="flex w-11/12 mx-auto mt-5 gap-4">
			<DonorsTable class="basis-full" />
			<div
				class="basis-7/12"
				v-if="currentDonor"
			>
				<DonorCard class="" />
			</div>
		</div>
		<AddDonorModal />
	</div>
</template>

<script setup lang="ts">
	import DonorsTable from "@/components/admin/DonorsTable.vue";
	import PrimaryButton from "@/components/shared/PrimaryButton.vue";
	import useDonorsStore from "@/stores/donors/donors";
	import { storeToRefs } from "pinia";
	import DonorCard from "@/components/admin/DonorCard.vue";
	import AddDonorModal from "@/components/admin/AddDonorModal.vue";

	const { addStore } = useDonorsStore();
	const { currentDonor } = storeToRefs(useDonorsStore());
	const { toggleAddModal } = addStore;
</script>

<style scoped></style>
