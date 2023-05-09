<template>
	<nav
		class="w-full rounded-3xl h-20 flex justify-end px-3 items-center bg-secondary dark:bg-slate-600"
	>
		<!-- <div><SearchInput></SearchInput></div> -->
		<div class="flex w-80 items-center justify-end gap-10">
			<NotificationsPanel :store="store" />
			<div class="flex items-center">
				<NavigationOptionsManu
					:user="currentUser"
					:logout="logout"
				/>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import { storeToRefs } from "pinia";
	import NavigationOptionsManu from "./NavigationOptionsMenu.vue";
	import NotificationsPanel from "@/components/shared/NotificationsPanel.vue";

	const props = defineProps<{
		store: any;
	}>();

	const authStore = props.store;

	const { logout } = authStore;

	const { currentUser } = storeToRefs(authStore);

	const showOptions = ref<Boolean>(false);

	function toggleOptions() {
		showOptions.value = !showOptions.value;
	}
</script>

<style scoped></style>
