<template>
	<AdminLayout :store="useAuthStore()">
		<template #side-navigation>
			<div>
				<routerLink to="/donor">
					<SideNavigationItem active="donor-dashboard">
						<PresentationChartBarIcon class="w-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Dashboard</span
						>
					</SideNavigationItem>
				</routerLink>
			</div>

			<div>
				<routerLink to="/donations">
					<SideNavigationItem active="donor-donations">
						<HeartIcon class="w-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Donations</span
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
	import useAuthStore from "@/stores/donor/auth";
	import { HeartIcon } from "@heroicons/vue/20/solid";
	import SideNavigationItem from "@/components/admin/SideNavigationItem.vue";

	import { PresentationChartBarIcon } from "@heroicons/vue/20/solid";
</script>

<style scoped></style>
