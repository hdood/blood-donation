<template>
	<button
		class="rounded-md active:translate-y-1 focus:ring-4 focus:ring-blue-300 transition-all border-2 border-indigo-700 dark:text-white"
	>
		<Loader v-if="props.loading" />
		<span v-else>
			<slot />
		</span>
	</button>
</template>

<script setup lang="ts">
	import Loader from "./Loader.vue";

	interface Props {
		loading?: boolean;
	}

	const props = withDefaults(defineProps<Props>(), {
		loading: false,
	});
</script>

<style scoped></style>
