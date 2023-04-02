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
			<div>
				<RouterLink to="/admin/conversations">
					<SideNavigationItem active="admin-conversations">
						<Conversation class="w-6 h-6" />
					</SideNavigationItem>
				</RouterLink>
			</div>
		</template>
		<RouterView v-slot="{ Component }">
			<transition
				enter-active-class="transition-all absolute w-11/12"
				leave-active-class="transition-all absolute   w-11/12"
				enter-from-class="opacity-0  translate-x-4"
				leave-to-class="opacity-0   translate-x-4"
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
</script>

<style scoped></style>
