<template>
	<aside class="flex flex-col items-center justify-between py-6 h-full">
		<div class="flex flex-col items-center space-y-20 w-full">
			<span class="dark:text-white font-semibold text-2xl">
				<Logo class="w-14 h-14" />
			</span>
			<div class="w-full space-y-8">
				<slot />
			</div>
		</div>
		<div class="">
			<DarkModeSwitch />
		</div>
	</aside>
</template>

<script setup lang="ts">
	import Logo from "@/icons/Logo.vue";
	import DarkModeSwitch from "./DarkModeSwitch.vue";
</script>

<style scoped></style>
