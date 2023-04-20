<template>
	<RadioGroup
		class="flex gap-4"
		v-model="gender"
	>
		<RadioGroupOption
			v-slot="{ active }"
			value="male"
			class="w-20 cursor-pointer"
		>
			<RadioGroupLabel
				class="w-full py-2 text-center block rounded-md border border-blue-400 cursor-pointer"
				:class="[active && 'bg-blue-400 text-white']"
				>Male</RadioGroupLabel
			>
		</RadioGroupOption>
		<RadioGroupOption
			v-slot="{ active }"
			value="female"
			class="w-20 cursor-pointer"
		>
			<RadioGroupLabel
				class="w-full py-2 text-center block rounded-md border border-red-400 cursor-pointer"
				:class="[active && 'bg-red-400 text-white']"
				>Female</RadioGroupLabel
			>
		</RadioGroupOption>
	</RadioGroup>
</template>

<script setup lang="ts">
	import {
		RadioGroup,
		RadioGroupOption,
		RadioGroupLabel,
	} from "@headlessui/vue";
	import { ref, watch } from "vue";

	const gender = ref("male");
	const emits = defineEmits(["update:modelValue"]);

	watch(gender, (value) => emits("update:modelValue", value));
</script>

<style scoped></style>
