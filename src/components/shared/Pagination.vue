<template>
	<div class="flex gap-2">
		<button
			v-for="link in range(1, paginationData['last_page'])"
			class="w-10 h-10 rounded-lg"
			:class="
				link == paginationData['current_page']
					? 'bg-indigo-600 text-white '
					: 'dark:text-white'
			"
			@click="fetchDonors(`${paginationData.path}?page=${link}`)"
			v-html="link"
		/>
	</div>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import range from "@/helpers/range";

	const donorsStore = useDonorsStore();
	const { fetchDonors } = donorsStore;
	const { paginationData } = storeToRefs(donorsStore);
</script>

<style scoped></style>
