<template>
	<AdminLayout :store="authStore">
		<template #side-navigation>
			<div>
				<routerLink to="/admin">
					<SideNavigationItem active="admin-dashboard">
						<DashBoardIcon class="w-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Dashboard</span
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
						<DonorIcon class="w-6 h-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Donors</span
						>
					</SideNavigationItem>
				</routerLink>
			</div>

			<div>
				<routerLink to="/admin/patients">
					<SideNavigationItem active="admin-patients">
						<PatientIcon class="w-6 h-6" />
						<span
							class="dark:text-white item overflow-hidden hidden transition-all duration-300"
							>Patients</span
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
				<component :is="Component"> </component>
			</transition>
		</RouterView>
	</AdminLayout>
</template>

<script setup lang="ts">
	import AdminLayout from "@/components/shared/default.vue";
	import SideNavigationItem from "@/components/admin/SideNavigationItem.vue";
	import DonorIcon from "@/icons/DonorIcon.vue";
	import DashBoardIcon from "@/icons/DashBoardIcon.vue";
	import PatientIcon from "@/icons/PatientIcon.vue";
	import useAuthStore from "@/stores/admin/auth";
	import { onMounted } from "vue";
	import { useRouter } from "vue-router";

	const authStore = useAuthStore();
</script>

<style scoped></style>
