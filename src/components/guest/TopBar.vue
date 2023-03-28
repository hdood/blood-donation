<template>
	<div class="bg-gray-200 dark:bg-slate-600">
		<div class="w-10/12 mx-auto flex justify-end py-2 space-x-4">
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
				to="/admin"
				class="underline hover:no-underline px-2 rounded-lg dark:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white"
			>
				Sign in as Admin
			</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useI18n } from "vue-i18n";

	const i18n = useI18n();

	function arabic() {
		i18n.locale.value = "ar";
	}
	function english() {
		i18n.locale.value = "en";
	}
</script>

<style scoped></style>
