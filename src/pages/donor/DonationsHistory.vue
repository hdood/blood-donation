<template>
	<div class="p-20 flex flex-col gap-7">
		<div class="text-2xl dark:text-slate-200">Donations History</div>
		<div>
			<DonationsTable />
		</div>
	</div>
</template>

<script setup lang="ts">
	import DonationsTable from "@/components/donor/DonationsTable.vue";
</script>

<style scoped></style>
