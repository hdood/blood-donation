<template>
	<AdminLayout>
		<template #side-navigation> </template>
		<transition
			enter-active-class="transition-all absolute"
			leave-active-class="transition-all absolute"
			enter-from-class="opacity-0 translate-x-full"
			leave-to-class="opacity-0 -translate-x-full"
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
