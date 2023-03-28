<template>
	<div class="flex-col flex">
		<div class="w-11/12 mx-auto flex justify-end">
			<PrimaryButton class="float-right px-3 py-1 mt-8"
				>Add Donor</PrimaryButton
			>
		</div>
		<DonorsTable />
	</div>
</template>

<script setup lang="ts">
	import DonorsTable from "@/components/admin/DonorsTable.vue";
	import PrimaryButton from "@/components/shared/PrimaryButton.vue";
</script>

<style scoped></style>
