<template>
	<button class="rounded-lg bg-indigo-400 text-white">
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
