<template>
	<RadioGroup v-model="hour">
		<div class="flex flex-wrap gap-6">
			<RadioGroupOption
				v-slot="{ checked }"
				v-for="hour in props.hours"
				:value="hour"
			>
				<span
					class="py-2 w-20 text-center block rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-800 bg-indigo-500 text-white'
							: 'bg-transparent'
					"
				>
					{{ hour }}
				</span>
			</RadioGroupOption>
		</div>
	</RadioGroup>
</template>

<script setup lang="ts">
	import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
	import { ref, watch } from "vue";

	const props = defineProps<{
		hours: Array<string>;
	}>();
	const hour = ref("");
	const emits = defineEmits(["update:modelValue"]);

	watch(hour, (value: string) => emits("update:modelValue", value));
</script>

<style scoped></style>
