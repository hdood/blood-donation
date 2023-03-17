<template>
	<Switch @toggle="toggleDarkMode"></Switch>
</template>

<script setup lang="ts">
	import Switch from "./Switch.vue";
	function toggleDarkMode() {
		document.body.classList.toggle("dark");
	}
</script>

<style scoped></style>
