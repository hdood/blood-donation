<template>
	<AdminLayout :store="authStore">
		<template #side-navigation>
			<div>
				<routerLink to="/admin">
					<SideNavigationItem active="admin-dashboard">
						<PresentationChartBarIcon class="w-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Dashboard</span
						>
					</SideNavigationItem>
				</routerLink>
			</div>

			<div>
				<routerLink to="/admin/requests">
					<SideNavigationItem active="admin-requests">
						<UserPlusIcon class="w-6 h-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Requests</span
						>
					</SideNavigationItem>
				</routerLink>
			</div>

			<div>
				<routerLink
					class=""
					to="/admin/donors"
				>
					<SideNavigationItem active="admin-donors">
						<HeartIcon class="w-6 h-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Donors</span
						>
					</SideNavigationItem>
				</routerLink>
			</div>

			<div>
				<routerLink
					class=""
					to="/admin/appointments"
				>
					<SideNavigationItem active="admin-appointments">
						<ClipboardDocumentCheckIcon class="w-6 h-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Appointments</span
						>
					</SideNavigationItem>
				</routerLink>
			</div>

			<div>
				<routerLink to="/admin/patients">
					<SideNavigationItem active="admin-patients">
						<UsersIcon class="w-6 h-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Patients</span
						>
					</SideNavigationItem>
				</routerLink>
			</div>

			<div>
				<routerLink to="/admin/blood-requests">
					<SideNavigationItem active="admin-blood-requests">
						<HandRaisedIcon class="w-6 h-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Needs</span
						>
					</SideNavigationItem>
				</routerLink>
			</div>
		</template>
		<RouterView v-slot="{ Component }">
			<transition
				enter-active-class="transition-all duration-300 "
				leave-active-class="transition-all duration-300"
				enter-from-class="opacity-0  translate-x-4"
				leave-to-class="opacity-0   translate-x-4"
				mode="out-in"
			>
				<component
					:key="$route.fullPath"
					:is="Component"
				>
				</component>
			</transition>
		</RouterView>
	</AdminLayout>
</template>

<script setup lang="ts">
	import AdminLayout from "@/components/shared/default.vue";
	import SideNavigationItem from "@/components/admin/SideNavigationItem.vue";
	import useAuthStore from "@/stores/admin/auth";
	import { PresentationChartBarIcon } from "@heroicons/vue/20/solid";
	import { UserPlusIcon } from "@heroicons/vue/20/solid";
	import { HeartIcon } from "@heroicons/vue/20/solid";
	import { UsersIcon } from "@heroicons/vue/20/solid";
	import { ClipboardDocumentCheckIcon } from "@heroicons/vue/20/solid";
	import { HandRaisedIcon } from "@heroicons/vue/24/solid";

	const authStore = useAuthStore();
</script>

<style scoped></style>
