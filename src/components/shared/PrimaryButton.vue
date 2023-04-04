<template>
	<button
		class="rounded-md"
		:class="[
			disabled
				? 'bg-gray-200 cursor-not-allowed'
				: 'bg-indigo-600 hover:bg-indigo-600 active:translate-y-1 focus:ring-4 focus:ring-blue-300 transition-all active:bg-indigo-900 text-white',
		]"
	>
		<Loader v-if="props.loading" />
		<span v-else>
			<slot />
		</span>
	</button>
</template>

<script setup lang="ts">
	import { toRefs } from "vue";
	import Loader from "./Loader.vue";

	interface Props {
		loading?: boolean;
		disabled?: boolean;
	}

	const props = withDefaults(defineProps<Props>(), {
		loading: false,
		disabled: false,
	});

	const { disabled } = toRefs(props);
</script>

<style scoped></style>
