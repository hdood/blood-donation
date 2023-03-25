<template>
	<Listbox v-model="selectedPerson">
		<div class="relative mt-1">
			<ListboxButton
				class="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
				v-slot="{ open }"
			>
				<span class="block truncate">{{ selectedPerson.name }}</span>
				<span
					class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
				>
					<ChevronDownIcon
						:class="[
							'h-5 w-5 text-gray-400 transition-all',
							open && 'rotate-90',
						]"
						aria-hidden="true"
					/>
				</span>
			</ListboxButton>

			<transition
				leave-active-class="transition duration-100 ease-in"
				leave-from-class="opacity-100"
				leave-to-class="opacity-0"
			>
				<ListboxOptions
					class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
				>
					<ListboxOption
						v-slot="{ active, selected }"
						v-for="person in people"
						:key="person.name"
						:value="person"
						as="template"
					>
						<li
							:class="[
								active
									? 'bg-red-100 text-red-900'
									: 'text-gray-900',
								'relative cursor-pointer select-none py-2 pl-10 pr-4',
							]"
						>
							<span
								:class="[
									selected ? 'font-medium' : 'font-normal',
									'block truncate',
								]"
								>{{ person.name }}</span
							>
							<span
								v-if="selected"
								class="absolute inset-y-0 left-0 flex items-center pl-3 fill-red-600"
							>
								<CheckMarkIcon
									class="h-4 w-4"
									aria-hidden="true"
								/>
							</span>
						</li>
					</ListboxOption>
				</ListboxOptions>
			</transition>
		</div>
	</Listbox>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import CheckMarkIcon from "@/icons/CheckMarkIcon.vue";
	import ChevronDownIcon from "@/icons/ChevronDownIcon.vue";

	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
	} from "@headlessui/vue";

	const people = [
		{ id: 1, name: "Durward Reynolds", unavailable: false },
		{ id: 2, name: "Kenton Towne", unavailable: false },
		{ id: 3, name: "Therese Wunsch", unavailable: false },
		{ id: 4, name: "Benedict Kessler", unavailable: true },
		{ id: 5, name: "Katelyn Rohan", unavailable: false },
	];
	const selectedPerson = ref(people[0]);
</script>

<style lang="scss" scoped></style>
