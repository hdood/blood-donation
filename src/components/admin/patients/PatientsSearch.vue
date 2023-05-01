<template>
	<Search class="w-5 fill-black/70" />
	<input
		type="text"
		name="donor-search"
		id="donor-search"
		class="focus:outline-none"
		placeholder="search for patients"
		@input="search($event)"
	/>
</template>

<script setup lang="ts">
	import { useDebounceFn } from "@vueuse/core";
	import usePatientsStore from "@/stores/admin/patients";
	const { fetchPatients, searchByName } = usePatientsStore();

	const search = useDebounceFn((e) => {
		if (e.target.value === "") {
			fetchPatients();
			return;
		}
		searchByName(e.target.value);
	}, 500);
</script>

<style scoped></style>
