<template>
	<div class="flex-col flex">
		<div class="w-11/12 mx-auto flex justify-end">
			<PrimaryButton class="float-right px-3 py-1 mt-8"
				>Add Donor</PrimaryButton
			>
		</div>
		<div class="flex w-11/12 mx-auto mt-5 gap-4">
			<DonorsTable class="basis-full" />
			<DonorCard class="basis-1/2" v-if="currentDonor" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import DonorsTable from "@/components/admin/DonorsTable.vue";
	import PrimaryButton from "@/components/shared/PrimaryButton.vue";
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import DonorCard from "@/components/admin/DonorCard.vue";

	const { currentDonor } = storeToRefs(useDonorsStore());
</script>

<style scoped></style>
