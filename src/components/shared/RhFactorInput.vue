<template>
	<RadioGroup v-model="tempDonor.rhFactor">
		<div class="flex gap-6">
			<RadioGroupOption
				v-slot="{ checked }"
				:value="true"
			>
				<span
					class="w-8 text-center block rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-600 text-white'
							: 'bg-transparent'
					"
					>+</span
				>
			</RadioGroupOption>
			<RadioGroupOption
				v-slot="{ checked }"
				:value="false"
			>
				<span
					class="w-8 text-center block rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-600 text-white'
							: 'bg-transparent'
					"
					>-</span
				>
			</RadioGroupOption>
		</div>
	</RadioGroup>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
	import useDonorsStore from "@/stores/admin/donors";

	const { tempDonor } = useDonorsStore();
</script>

<style scoped></style>
