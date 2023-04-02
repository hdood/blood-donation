<script setup lang="ts">
	import { RouterView } from "vue-router";
	import getCsrfToken from "./helpers/getCsrfToken";

	import { onMounted } from "vue";
	import Notification from "./components/shared/Notification.vue";
	enum rhFactor {
		POSITIVE,
		NEGATIVE,
	}

	onMounted(async () => {
		await getCsrfToken();
	});

	function rhDonation(donor: number, receiver: number): boolean {
		return !!(donor ** receiver);
	}
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
