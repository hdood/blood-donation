<template>
	<RadioGroup v-model="rhFactor">
		<div class="flex gap-6">
			<RadioGroupOption
				v-slot="{ checked }"
				value="positive"
			>
				<span
					class="w-8 text-center block rounded border border-red-700 dark:border-red-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-red-400/50 bg-red-500 text-white'
							: 'bg-transparent'
					"
					>+</span
				>
			</RadioGroupOption>
			<RadioGroupOption
				v-slot="{ checked }"
				value="negative"
			>
				<span
					class="w-8 text-center block rounded border border-red-700 dark:border-red-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-red-400/50 bg-red-500 text-white'
							: 'bg-transparent'
					"
					>-</span
				>
			</RadioGroupOption>
		</div>
	</RadioGroup>
</template>

<script setup lang="ts">
	import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
	import { ref, watch } from "vue";

	const rhFactor = ref("");
	const emits = defineEmits(["update:modelValue"]);

	watch(rhFactor, (value: string) => emits("update:modelValue", value));
</script>

<style scoped></style>
