<template>
	<div class="flex-col flex mt-10">
		<div class="w-11/12 mx-auto flex justify-between">
			<h1 class="text-lg font-medium opacity-80 dark:text-white">
				Donors Requests
			</h1>
		</div>
		<div class="flex w-11/12 mx-auto mt-5 gap-4">
			<RequestsTable class="basis-full" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import RequestsTable from "@/components/admin/requests/RequestsTable.vue";
</script>

<style scoped></style>
