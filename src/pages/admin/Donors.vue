<template>
	<div class="flex-col flex">
		<div class="w-11/12 mx-auto flex justify-end">
			<PrimaryButton
				class="float-right px-3 py-1 mt-8"
				@click="toggleAddDonorModal"
				>Add Donor</PrimaryButton
			>
		</div>
		<div class="flex w-11/12 mx-auto mt-5 gap-4">
			<DonorsTable class="basis-full" />
			<div class="basis-7/12" v-if="currentDonor">
				<DonorCard class="" />
			</div>
		</div>
		<AddDonorModal />
	</div>
</template>

<script setup lang="ts">
	import DonorsTable from "@/components/admin/DonorsTable.vue";
	import PrimaryButton from "@/components/shared/PrimaryButton.vue";
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import DonorCard from "@/components/admin/DonorCard.vue";
	import AddDonorModal from "@/components/admin/AddDonorModal.vue";

	const { currentDonor } = storeToRefs(useDonorsStore());
	const { toggleAddDonorModal } = useDonorsStore();
</script>

<style scoped></style>
