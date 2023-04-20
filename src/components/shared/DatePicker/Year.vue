<template>
	<Listbox v-model="year">
		<div class="relative mt-1 w-28">
			<ListboxButton
				class="border relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
				v-slot="{ open }"
			>
				<span class="block truncate">{{ year }}</span>
				<span
					class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
				>
					<CheveronDown
						:class="[
							'h-5 w-5 text-gray-400 transition-all',
							open && 'rotate-90',
						]"
						aria-hidden="true"
					/>
				</span>
			</ListboxButton>

			<transition
				enter-active-class="transition-all absolute"
				leave-active-class="transition-all absolute"
				leave-from-class="opacity-0 translate-y-4"
				leave-to-class="opacity-0 translate-y-4"
			>
				<ListboxOptions
					class="absolute text-center mt-1 max-h-60 w-full overflow-auto rounded-md bg-white px-1 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
				>
					<ListboxOption
						v-slot="{ active, selected }"
						v-for="year in years"
						:key="year"
						:value="year"
						as="template"
					>
						<li
							:class="[
								active
									? 'bg-indigo-100 text-red-900'
									: 'text-gray-900',
								'relative cursor-pointer rounded-lg text-center select-none py-2  flex justify-center ',
							]"
						>
							<span
								:class="[
									selected ? 'font-medium' : 'font-normal',
									'block truncate',
								]"
								>{{ year }}</span
							>
						</li>
					</ListboxOption>
				</ListboxOptions>
			</transition>
		</div>
	</Listbox>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from "vue";
	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
	} from "@headlessui/vue";

	const years = computed(() => {
		const currentYear = new Date().getFullYear();
		const _years = [];

		for (let i = currentYear - 18; i >= currentYear - 70; i--) {
			_years.push(i);
		}
		return _years;
	});

	const emits = defineEmits(["update:modelValue"]);

	const year = ref("Year");

	watch(year, (value) => emits("update:modelValue", value));
</script>

<style scoped></style>
