<template>
	<AdminLayout :store="authStore">
		<template #side-navigation> </template>
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
	import useAuthStore from "@/stores/donor/auth";

	const authStore = useAuthStore();
</script>

<style scoped></style>
