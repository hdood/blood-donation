<template>
	<RadioGroup v-model="tempDonor.bloodType">
		<div class="flex gap-6">
			<RadioGroupOption
				v-slot="{ checked }"
				value="a"
			>
				<span
					class="w-16 h-16 text-xl grid place-items-center rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-600 text-white'
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
					class="w-16 h-16 text-xl grid place-items-center rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-600 text-white'
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
					class="w-16 h-16 text-xl grid place-items-center rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-600 text-white'
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
					class="w-16 h-16 text-xl grid place-items-center rounded border border-indigo-700 dark:border-indigo-400/50 cursor-pointer"
					:class="
						checked
							? 'dark:bg-indigo-400/50 bg-indigo-600 text-white'
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
	import useDonorsStore from "@/stores/admin/donors";

	const { tempDonor } = useDonorsStore();
</script>

<style scoped></style>
