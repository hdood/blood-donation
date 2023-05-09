<template>
	<div
		class="bg-gray-200 dark:bg-slate-600 flex items-center justify-between px-20"
		dir="ltr"
	>
		<DarkModeSwitch />

		<div class="flex py-2 gap-4 justify-end">
			<button
				class="underline hover:no-underline dark:text-white px-2 rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white"
				@click="arabic"
				v-if="i18n.locale.value != 'ar'"
			>
				العربية
			</button>
			<button
				class="underline hover:no-underline px-2 rounded-lg dark:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white"
				@click="english"
				v-else
			>
				English
			</button>
			<RouterLink
				to="/admin/login"
				class="underline hover:no-underline px-2 rounded-lg dark:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white"
			>
				Sign in as Admin
			</RouterLink>
			<RouterLink
				to="/patient/login"
				class="underline hover:no-underline px-2 rounded-lg dark:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white"
			>
				Sign in as Patient
			</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from "vue";
	import { useI18n } from "vue-i18n";
	import DarkModeSwitch from "../shared/DarkModeSwitch.vue";

	const i18n = useI18n();

	function arabic() {
		localStorage.setItem("lang", "ar");
		i18n.locale.value = "ar";
	}
	function english() {
		localStorage.setItem("lang", "en");

		i18n.locale.value = "en";
	}

	onMounted(() => {
		i18n.locale.value = localStorage.getItem("lang") || "en";
	});
</script>

<style scoped></style>
