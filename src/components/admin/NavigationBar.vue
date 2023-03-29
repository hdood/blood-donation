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
						class="absolute right-0 bg-red-500 top-0 rounded-full h-2 w-2"
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
				<img src="/doctor.jpeg" class="h-10 w-10 rounded-full" alt="" />
				<div
					class="flex items-center cursor-pointer select-none space-x-1"
					@click="toggleOptions"
				>
					<span class="dark:text-white/80 w-32">
						{{ currentUser.name }}
					</span>
					<svg
						class="w-5 h-5 dark:fill-white/70"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
						/>
					</svg>
				</div>
				<transition
					enter-active-class="transition-all"
					leave-active-class="transition-all"
					enter-from-class="opacity-0 translate-y-4"
					leave-to-class="opacity-0 translate-y-4"
				>
					<div
						v-if="showOptions"
						class="absolute flex flex-col gap-2 top-14 -left-2 w-52 rounded-lg px-1 py-4 space-y-1 shadow bg-white select-none z-50"
					>
						<button
							class="p-1 hover:bg-blue-200 dark:hover:bg-slate-700 w-11/12 mx-auto rounded-lg"
						>
							Settings
						</button>
						<button
							class="p-1 hover:bg-blue-200 dark:hover:bg-slate-700 w-11/12 mx-auto rounded-lg"
							@click="logout(router)"
						>
							Logout
						</button>
					</div>
				</transition>
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
