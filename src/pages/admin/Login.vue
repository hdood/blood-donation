<template>
	<div class="w-full h-screen grid place-items-center dark:bg-slate-700">
		<div
			class="h-96 w-96 rounded-2xl py-3 bg-gray-100 dark:bg-slate-500 dark:text-white"
		>
			<h3 class="w-full text-center text-xl select-none">Admin Login</h3>
		</div>
		<DarkModeSwitch class="absolute bottom-5 right-5" />
	</div>
</template>

<script setup lang="ts">
	import DarkModeSwitch from "@/components/shared/DarkModeSwitch.vue";
</script>

<style>
	body,
	html {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
