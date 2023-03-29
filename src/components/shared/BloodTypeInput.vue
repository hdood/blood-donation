<template>
	<RadioGroup v-model="bloodType">
		<div class="flex gap-6">
			<RadioGroupOption v-slot="{ checked }" value="a">
				<span
					class="px-2 w-12 text-center block text-xl rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-700 text-white'
							: 'bg-transparent'
					"
					>A</span
				>
			</RadioGroupOption>
			<RadioGroupOption v-slot="{ checked }" value="B">
				<span
					class="px-2 w-12 text-center block text-xl rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-700 text-white'
							: 'bg-transparent'
					"
					>B</span
				>
			</RadioGroupOption>
			<RadioGroupOption v-slot="{ checked }" value="ab">
				<span
					class="px-2 w-12 text-center block text-xl rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-700 text-white'
							: 'bg-transparent'
					"
					>AB</span
				>
			</RadioGroupOption>
			<RadioGroupOption v-slot="{ checked }" value="O">
				<span
					class="px-2 w-12 text-center block text-xl rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-700 text-white'
							: 'bg-transparent'
					"
					>O</span
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

	const bloodType = ref("a");
</script>

<style scoped></style>
