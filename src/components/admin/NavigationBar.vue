<template>
	<nav
		class="w-full rounded-3xl h-20 flex justify-between px-3 items-center bg-secondary dark:bg-slate-600"
	>
		<div><SearchInput></SearchInput></div>
		<div class="flex items-center space-x-6 relative">
			<div class="flex items-center space-x-4 dark:fill-white/80">
				<SettingsIcon
					class="w-5 h-5 fill-none stroke-black dark:stroke-white/80 stroke-2"
				/>
				<div class="relative">
					<NotificationsIcon
						class="w-5 h-5 cursor-pointer select-none"
						@click="toggleNotifications"
					/>
					<div
						class="absolute right-0 bg-indigo-500 top-0 rounded-full h-2 w-2"
					></div>
					<transition
						enter-active-class="transition-all"
						leave-active-class="transition-all"
						enter-from-class="opacity-0 translate-y-4"
						leave-to-class="opacity-0 translate-y-4"
					>
						<Notifications v-if="showNotifcations" />
					</transition>
				</div>
			</div>
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
					<NavigationOptionsManu />
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import SettingsIcon from "@/icons/SettingsIcon.vue";
	import NotificationsIcon from "@/icons/NotificationsIcon.vue";
	import Notifications from "./Notifications.vue";
	import { ref } from "vue";
	import SearchInput from "./SearchInput.vue";
	import useAuthStore from "@/stores/admin/auth";
	import { storeToRefs } from "pinia";
	import { useRouter } from "vue-router";
	import NavigationOptionsManu from "./NavigationOptionsMenu.vue";

	const authStore = useAuthStore();

	const router = useRouter();

	const { currentUser } = storeToRefs(authStore);

	const { logout } = authStore;
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
