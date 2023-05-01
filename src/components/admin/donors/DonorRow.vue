<template>
	<tr
		class="border-b w-full h-10 dark:bg-gray-800 dark:border-gray-700"
		:class="[
			active
				? 'bg-indigo--200 dark:bg-indigo--500/70'
				: 'bg-white hover:bg-gray-100 cursor-pointer',
		]"
		@click="displayDonor"
	>
		<td class="h-10 px-4 dark:text-white">
			{{ props.donor.name }}
		</td>
		<td class="h-10 dark:text-white">
			{{ props.donor.bloodGroupString }}
		</td>
		<td class="h-10 dark:text-white">
			{{ props.donor.phone }}
		</td>
		<td class="h-10 dark:text-white">
			{{ props.donor.email }}
		</td>
	</tr>
</template>

<script setup lang="ts">
	import useDonorsStore from "@/stores/admin/donors";
	import { storeToRefs } from "pinia";
	import { computed } from "vue";

	const props = defineProps<{
		donor: any;
	}>();

	const { selectedDonor } = storeToRefs(useDonorsStore());

	function displayDonor() {
		selectedDonor.value = props.donor;
	}
	const active = computed(() => {
		if (
			typeof selectedDonor?.value == "boolean" ||
			selectedDonor.value?.id != props.donor.id
		)
			return false;

		return true;
	});
</script>

<style scoped></style>
