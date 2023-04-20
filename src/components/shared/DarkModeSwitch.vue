<template>
	<Switch
		:on="isDark"
		@toggle="toggleDark"
	></Switch>
</template>

<script setup lang="ts">
	import Switch from "./Switch.vue";
	import { useDark, useToggle } from "@vueuse/core";

	const isDark = useDark({
		storageKey: "color-scheme",
	});
	const toggleDark = useToggle(isDark);
</script>

<style scoped></style>
