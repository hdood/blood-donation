<template>
	<RadioGroup v-model="donationType">
		<div class="flex flex-col space-y-3">
			<RadioGroupOption
				v-slot="{ checked }"
				v-for="(donationType, index) in donations"
				:value="index"
				:key="index"
				class="w-64"
			>
				<span
					class="p-1 block rounded border border-red-700 dark:border-red-400/50 cursor-pointer"
					:class="
						checked
							? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white'
							: 'bg-transparent'
					"
				>
					{{ donationType }}
				</span>
			</RadioGroupOption>
		</div>
	</RadioGroup>
</template>

<script setup lang="ts">
	import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
	import { watch, ref } from "vue";
	import donations from "@/enums/donations";

	const donationType = ref("");

	const emit = defineEmits(["update:modelValue"]);

	watch(donationType, (value: string) => emit("update:modelValue", value));
</script>

<style scoped></style>
