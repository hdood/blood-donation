<template>
	<RouterLink class="hover:text-red-400 transition-colors" :to="props.to">
		<slot />
	</RouterLink>
</template>

<script setup lang="ts">
	const props = defineProps<{
		to: string;
	}>();
</script>

<style scoped></style>
