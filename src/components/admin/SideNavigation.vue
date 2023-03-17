<template>
	<aside class="flex flex-col items-center justify-between py-6 h-full">
		<div class="flex flex-col items-center space-y-20 w-full">
			<Logo class="w-16 h-16 dark:stroke-white" />
			<div class="w-full space-y-8">
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
			</div>
		</div>
		<div class="">
			<DarkModeSwitch />
		</div>
	</aside>
</template>

<script setup lang="ts">
	import SideNavigationItem from "./SideNavigationItem.vue";
	import DonorIcon from "@/icons/DonorIcon.vue";
	import DashBoardIcon from "@/icons/DashBoardIcon.vue";
	import PatientIcon from "@/icons/PatientIcon.vue";
	import Logo from "@/icons/Logo.vue";
	import DarkModeSwitch from "../shared/DarkModeSwitch.vue";
</script>

<style scoped></style>
