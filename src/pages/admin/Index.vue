<template>
	<AdminLayout>
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
	import AdminLayout from "../../components/admin/layout/default.vue";
</script>

<style scoped></style>
