<template>
	<RadioGroup v-model="bloodGroup">
		<div class="flex gap-6">
			<RadioGroupOption
				v-slot="{ checked }"
				value="a"
			>
				<span
					class="w-10 h-10 text-xl grid place-items-center rounded border border-red-700 dark:border-red-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-red-400/50 bg-red-500 text-white'
							: 'bg-transparent'
					"
					>A</span
				>
			</RadioGroupOption>
			<RadioGroupOption
				v-slot="{ checked }"
				value="b"
			>
				<span
					class="w-10 h-10 text-xl grid place-items-center rounded border border-red-700 dark:border-red-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-red-400/50 bg-red-500 text-white'
							: 'bg-transparent'
					"
					>B</span
				>
			</RadioGroupOption>
			<RadioGroupOption
				v-slot="{ checked }"
				value="ab"
			>
				<span
					class="w-10 h-10 text-xl grid place-items-center rounded border border-red-700 dark:border-red-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-red-400/50 bg-red-500 text-white'
							: 'bg-transparent'
					"
					>AB</span
				>
			</RadioGroupOption>
			<RadioGroupOption
				v-slot="{ checked }"
				value="o"
			>
				<span
					class="w-10 h-10 text-xl grid place-items-center rounded border border-red-700 dark:border-red-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-red-400/50 bg-red-500 text-white'
							: 'bg-transparent'
					"
					>O</span
				>
			</RadioGroupOption>
		</div>
	</RadioGroup>
</template>

<script setup lang="ts">
	import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
	import { watch, ref } from "vue";

	const bloodGroup = ref("");

	const emit = defineEmits(["update:modelValue"]);

	watch(bloodGroup, (value: string) => emit("update:modelValue", value));
</script>

<style scoped></style>
