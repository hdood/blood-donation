<script setup lang="ts">
	import { RouterView } from "vue-router";
	import getCsrfToken from "./helpers/getCsrfToken";
	import { onMounted } from "vue";
	import Notification from "./components/shared/Notifications.vue";

	function test(response: any) {}

	onMounted(async () => {
		await getCsrfToken();
	});
</script>

<template>
	<RouterView v-slot="{ Component }">
		<transition
			enter-active-class="transition-all"
			leave-active-class="transition-all"
			enter-from-class="opacity-0 translate-x-20"
			leave-to-class="opacity-0 translate-x-4"
		>
			<component :is="Component" />
		</transition>
	</RouterView>
	<Notification />
</template>

<style>
	* {
		transition: background-color 300ms ease;
	}
</style>
