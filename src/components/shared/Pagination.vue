<template>
	<div
		v-if="paginationData.last_page != 1"
		class="flex gap-2"
	>
		<button
			v-for="link in range(1, paginationData['last_page'])"
			class="w-10 h-10 rounded-lg"
			:class="
				link == paginationData['current_page']
					? 'bg-indigo-500 text-white '
					: 'dark:text-white'
			"
			@click="fetch(`${paginationData.path}?page=${link}`)"
			v-html="link"
		/>
	</div>
</template>

<script setup lang="ts">
	import range from "@/helpers/range";
	import { toRefs } from "vue";

	const props = defineProps<{
		fetch: Function;
		paginationData: any;
	}>();

	const { paginationData } = toRefs(props);

	const { fetch } = props;
</script>

<style scoped></style>
