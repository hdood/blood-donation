<template>
	<nav
		class="w-full rounded-3xl h-20 flex justify-between px-3 items-center bg-secondary dark:bg-slate-600"
	>
		<div><SearchInput></SearchInput></div>
		<div class="flex items-center space-x-6 relative">
			<div class="flex items-center space-x-3 relative">
				<img
					src="/doctor.jpeg"
					class="h-10 w-10 rounded-full"
					alt=""
				/>
				<div
					class="flex items-center cursor-pointer select-none space-x-1"
					@click="toggleOptions"
				>
					<span class="dark:text-white/80 w-32">
						{{ currentUser.name }}
					</span>
					<NavigationOptionsManu :logout="logout" />
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import SearchInput from "./SearchInput.vue";
	import { storeToRefs } from "pinia";
	import NavigationOptionsManu from "./NavigationOptionsMenu.vue";

	const props = defineProps<{
		store: any;
	}>();

	const authStore = props.store;

	const { logout } = authStore;

	const { currentUser } = storeToRefs(authStore);

	const showOptions = ref<Boolean>(false);
	const showNotifcations = ref<Boolean>(false);

	function toggleOptions() {
		showOptions.value = !showOptions.value;
	}
	function toggleNotifications() {
		showNotifcations.value = !showNotifcations.value;
	}
</script>

<style scoped></style>
