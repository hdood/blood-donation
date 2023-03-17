<template>
	<div class="bg-primary dark:bg-slate-700 w-screen relative h-screen pt-6">
		<NavigationBar />
		<DarkModeSwitch class="fixed top-8 right-8" />
		<LoginModal />
	</div>
</template>

<script setup lang="ts">
	import NavigationBar from "./NavigationBar.vue";
	import DarkModeSwitch from "../shared/DarkModeSwitch.vue";
	import LoginModal from "./LoginModal.vue";
</script>
<style scoped>
	body,
	html {
		height: 100%;
		overflow: hidden;
		width: 100%;
	}
</style>
