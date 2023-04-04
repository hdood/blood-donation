<template>
	<tr
		class="border-b dark:bg-gray-800 dark:border-gray-700"
		:class="[
			active
				? 'bg-indigo-200 dark:bg-indigo-600/70'
				: 'bg-white hover:bg-gray-100 cursor-pointer',
		]"
		@click="displayDonor"
	>
		<th
			scope="row"
			class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
		>
			{{ props.donor.name }}
		</th>
		<td class="px-6 py-4 dark:text-white text-center">
			{{ props.donor.bloodTypeString }}
		</td>
		<td class="px-6 py-4 dark:text-white text-center">
			{{ props.donor.phone }}
		</td>
		<td class="px-6 py-4 dark:text-white text-center">
			{{ props.donor.email }}
		</td>
		<td class="px-6 py-4 dark:text-white text-center">
			{{ props.donor.address }}
		</td>
	</tr>
</template>

<script setup lang="ts">
	import type Donor from "@/models/Donor";
	import useDonorsStore from "@/stores/donors/donors";
	import { storeToRefs } from "pinia";
	import { computed } from "vue";

	const props = defineProps<{
		donor: Donor;
	}>();

	const { currentDonor } = storeToRefs(useDonorsStore());

	function displayDonor() {
		currentDonor.value = props.donor;
	}
	const active = computed(() => {
		if (
			typeof currentDonor.value == "boolean" ||
			currentDonor.value?.id != props.donor.id
		)
			return false;

		return true;
	});
</script>

<style scoped></style>
