<template>
	<div
		class="w-full items-center flex justify-center h-12"
		:class="[
			active && 'border-l-4 border-indigo-500 fill-white',
			!active && 'fill-black/50 dark:fill-white/80',
		]"
	>
		<div
			class="h-10 w-10 p-2 rounded-lg grid place-items-center"
			:class="[active && 'bg-indigo-400 dark:bg-indigo-500/30']"
		>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from "vue";
	import { useRoute } from "vue-router";
	const props = defineProps<{
		active: String;
	}>();
	const active = computed(() => useRoute().name == props.active);
</script>

<style scoped></style>
