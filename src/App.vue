<script setup lang="ts">
	import { RouterView } from "vue-router";
</script>

<template>
	<RouterView />
</template>

<style>
	* {
		transition: background-color 300ms ease;
	}
	svg {
		transition: fill 300ms ease, stroke 300ms ease;
	}
</style>
