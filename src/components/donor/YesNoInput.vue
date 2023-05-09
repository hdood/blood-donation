<template>
	<RadioGroup v-model="answer">
		<div class="flex gap-6">
			<RadioGroupOption
				v-slot="{ checked }"
				:value="true"
			>
				<span
					class="py-2 w-20 text-center block rounded border border-red-700 dark:border-red-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-rose-800 bg-red-500 text-white'
							: 'bg-transparent'
					"
					>Yes</span
				>
			</RadioGroupOption>
			<RadioGroupOption
				v-slot="{ checked }"
				:value="false"
			>
				<span
					class="py-2 w-20 text-center block rounded border border-red-700 dark:border-red-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-rose-800 bg-red-500 text-white'
							: 'bg-transparent'
					"
					>No</span
				>
			</RadioGroupOption>
		</div>
	</RadioGroup>
</template>

<script setup lang="ts">
	import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
	import { ref, watch } from "vue";

	const answer = ref("");
	const emits = defineEmits(["update:modelValue"]);

	watch(answer, (value: string) => emits("update:modelValue", value));
</script>

<style scoped></style>
