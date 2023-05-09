<template>
	<div
		class="dark:bg-slate-700 w-screen relative h-full overflow-hidden"
		:dir="i18n.locale.value == 'ar' ? 'rtl' : 'ltr'"
	>
		<TopBar />
		<NavigationBar />
		<slot />

		<Footer />
	</div>
</template>

<script setup lang="ts">
	import NavigationBar from "./NavigationBar.vue";
	import TopBar from "./TopBar.vue";
	import Footer from "./Footer.vue";
	import { useI18n } from "vue-i18n";
	const i18n = useI18n();
</script>
<style scoped>
	body,
	html {
		height: 100%;
		overflow: hidden;
		width: 100%;
	}
</style>
