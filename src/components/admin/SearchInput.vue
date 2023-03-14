<template>
	<div
		class="bg-white flex items-center p-2 h-12 rounded-3xl space-x-2 dark:bg-slate-400 relative"
	>
		<svg
			class="h-4 w-4 opacity-50 dark:fill-white dark:opacity-90"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
		>
			<path
				d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
			/>
		</svg>
		<input
			class="w-full border-none outline-none dark:bg-slate-400 h-full"
			v-model="searchTerm"
			type="text"
			placeholder="Search for something"
		/>

		<transition
			enter-active-class="transition-all"
			leave-active-class="transition-all"
			enter-from-class="opacity-0 translate-y-4"
			leave-to-class="opacity-0 translate-y-4"
		>
			<div
				v-if="searching"
				class="absolute bg-white max-h-fit top-16 w-64 rounded-lg text-center text-black flex flex-col py-2 items-center space-y-3 shadow"
			>
				<div v-if="!results.length" class="text-black">
					Nothing found !!!
				</div>
				<routerLink
					v-for="result in results"
					:to="result.link"
					class="flex items-center w-11/12 px-6 py-2 hover:bg-blue-200 h-10 space-x-4 rounded-lg"
					@click="endSearch"
				>
					<div
						class="bg-indigo-400 fill-white h-8 w-8 grid place-items-center rounded"
						v-if="result.isComponent"
					>
						<component
							:is="result.component"
							class="w-6 h-6"
						></component>
					</div>
					<img
						v-else
						:src="result.imgSrc"
						class="h-8 w-8 rounded-lg"
						alt=""
					/>
					<span>{{ result.name }}</span>
				</routerLink>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
	import type Searchable from "@/contracts/Searchable";
	import SearchablePages from "@/data/SearchablePages";
	import { ref, watch } from "vue";

	const searchTerm = ref<string>("");
	const searching = ref<boolean>(false);
	const results = ref<Array<Searchable>>([]);

	watch(searchTerm, (term: string) => {
		results.value = [];

		if (term == "") {
			searching.value = false;
			return;
		}
		const regex = new RegExp("^" + term);

		SearchablePages.map((page) => {
			if (page.name.match(regex)) {
				results.value.push(page);
			}
		});

		searching.value = true;
	});
	function endSearch() {
		searching.value = false;
	}
</script>

<style scoped>
	.dark input::placeholder {
		color: rgba(255, 255, 255, 0.8);
	}
</style>
