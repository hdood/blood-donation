<template>
	<div class="flex-col flex mt-10">
		<div class="w-11/12 mx-auto flex justify-between">
			<h1 class="text-lg font-medium opacity-80 dark:text-white">
				Manage Donors
			</h1>
		</div>
		<div class="flex w-11/12 mx-auto mt-5 gap-4">
			<DonorsTable class="basis-full" />
			<div
				class="basis-7/12"
				v-if="selectedDonor"
			>
				<DonorCard class="" />
			</div>
		</div>
		<AddDonorModal />
		<UpdateDonorModal />
		<deleteDonorDialog />
		<DonorCardPreview />
		<RegisterDonationModal />
	</div>
</template>

<script setup lang="ts">
	import DonorsTable from "@/components/admin/donors/DonorsTable.vue";
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import DonorCard from "@/components/admin/donors/DonorCard.vue";
	import AddDonorModal from "@/components/admin/donors/AddDonorModal.vue";
	import DonorCardPreview from "@/components/admin/donors/donorCardPreview.vue";
	import deleteDonorDialog from "@/components/admin/donors/deleteDonorDialog.vue";
	import UpdateDonorModal from "@/components/admin/donors/UpdateDonorModal.vue";
	import RegisterDonationModal from "@/components/admin/donors/donations/RegisterDonationModal.vue";

	const { selectedDonor } = storeToRefs(useDonorsStore());
</script>

<style scoped></style>
