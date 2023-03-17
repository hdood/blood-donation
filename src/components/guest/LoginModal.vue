<template>
	<Modal :show="showLoginModal" @close="toggleLoginModal">
		<template #head>Modal head</template>
	</Modal>
</template>

<script setup lang="ts">
	import useAuthStore from "@/stores/donor/auth";
	import { storeToRefs } from "pinia";
	import Modal from "../shared/Modal.vue";

	const authStore = useAuthStore();

	const { showLoginModal } = storeToRefs(authStore);
	const { toggleLoginModal } = authStore;

	console.log(toggleLoginModal);
</script>

<style scoped></style>
