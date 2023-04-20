<template>
	<Search class="w-5 fill-black/70" />
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
	import usePatientsStore from "@/stores/admin/patients";
	const { fetchPatients } = usePatientsStore();

	const search = useDebounceFn((e) => {
		if (e.target.value === "") {
			fetchPatients();
			return;
		}
		fetchPatients(
			`http://localhost:8000/api/admin/patient?query=${e.target.value}`
		);
	}, 500);
</script>

<style scoped></style>
