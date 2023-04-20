<template>
	<div
		class="w-[30rem] h-56 rounded-lg flex justify-between p-6 bg-indigo-100 rounded-tl-[60px] rounded-bl-[60px]"
	>
		<div class="flex flex-col space-y-2">
			<span class="font-medium text-lg">
				{{ selectedDonor.name }}
			</span>
			<span class="text-md">
				{{ selectedDonor.bloodTypeString }}
			</span>
			<span>
				{{ selectedDonor.phone }}
			</span>
			<span class="text-sm w-[20em]">
				{{ selectedDonor.address }}
			</span>
		</div>
		<div>
			<img
				src="/donor_placeholder.png"
				class="rounded-lg w-72 h-40"
				alt="donor image"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from "vue";
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	const { selectedDonor } = storeToRefs(useDonorsStore());
</script>

<style scoped></style>
