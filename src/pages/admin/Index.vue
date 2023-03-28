<template>
	<AdminLayout>
		<template #side-navigation>
			<div>
				<routerLink to="/admin">
					<SideNavigationItem active="admin-dashboard">
						<DashBoardIcon class="w-6 h-6" />
					</SideNavigationItem>
				</routerLink>
			</div>

			<div>
				<routerLink to="/admin/donors">
					<SideNavigationItem active="admin-donors">
						<DonorIcon class="w-6 h-6" />
					</SideNavigationItem>
				</routerLink>
			</div>

			<div>
				<routerLink to="/admin/patients">
					<SideNavigationItem active="admin-patients">
						<PatientIcon class="w-6 h-6" />
					</SideNavigationItem>
				</routerLink>
			</div>
		</template>
		<transition
			enter-active-class="transition-all absolute"
			leave-active-class="transition-all absolute"
			enter-from-class="opacity-0 translate-x-4"
			leave-to-class="opacity-0 -translate-x-4"
		>
			<RouterView :key="$route.path"></RouterView>
		</transition>
	</AdminLayout>
</template>

<script setup lang="ts">
	import AdminLayout from "@/components/shared/default.vue";
	import SideNavigationItem from "@/components/admin/SideNavigationItem.vue";
	import DonorIcon from "@/icons/DonorIcon.vue";
	import DashBoardIcon from "@/icons/DashBoardIcon.vue";
	import PatientIcon from "@/icons/PatientIcon.vue";
</script>

<style scoped></style>
