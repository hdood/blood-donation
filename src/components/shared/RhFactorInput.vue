<template>
	<RadioGroup v-model="rhFactor">
		<div class="flex gap-6">
			<RadioGroupOption v-slot="{ checked }" value="positive">
				<span
					class="w-8 text-center block rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-700 text-white'
							: 'bg-transparent'
					"
					>+</span
				>
			</RadioGroupOption>
			<RadioGroupOption v-slot="{ checked }" value="negative">
				<span
					class="w-8 text-center block rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-700 text-white'
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
	import {
		RadioGroup,
		RadioGroupLabel,
		RadioGroupOption,
	} from "@headlessui/vue";

	const rhFactor = ref("positive");
</script>

<style scoped></style>
