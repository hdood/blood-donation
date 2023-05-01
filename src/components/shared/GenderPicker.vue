<template>
	<RadioGroup
		class="flex gap-4"
		v-model="tempDonor.gender"
	>
		<RadioGroupOption
			v-slot="{ checked }"
			value="male"
			class="w-20 cursor-pointer"
		>
			<RadioGroupLabel
				class="w-full py-2 text-center block rounded-md border border-blue-400 cursor-pointer"
				:class="[checked && 'bg-blue-400 text-white']"
				>Male</RadioGroupLabel
			>
		</RadioGroupOption>
		<RadioGroupOption
			v-slot="{ checked }"
			value="female"
			class="w-20 cursor-pointer"
		>
			<RadioGroupLabel
				class="w-full py-2 text-center block rounded-md border border-red-400 cursor-pointer"
				:class="[checked && 'bg-red-400 text-white']"
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
	import useDonorStore from "@/stores/admin/donors";

	const { tempDonor } = useDonorStore();
</script>

<style scoped></style>
