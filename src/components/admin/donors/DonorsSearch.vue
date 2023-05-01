<template>
	<input
		type="text"
		name="donor-search"
		id="donor-search"
		class="focus:outline-none"
		placeholder="search for donor"
		@input="search($event)"
	/>
</template>

<script setup lang="ts">
	import { useDebounceFn } from "@vueuse/core";
	import useDonorsStore from "@/stores/admin/donors";
	const { searchByName, fetchDonors } = useDonorsStore();

	const search = useDebounceFn((e) => {
		if (e.target.value === "") {
			fetchDonors();
			return;
		}
		searchByName(e.target.value);
	}, 500);
</script>

<style scoped></style>
