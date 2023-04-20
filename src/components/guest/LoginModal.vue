<template>
	<Modal
		:show="showLoginModal"
		@close="toggleLoginModal"
	>
	</Modal>
</template>

<script setup lang="ts">
	import useAuthStore from "@/stores/donor/auth";
	import { storeToRefs } from "pinia";
	import Modal from "../shared/Modal.vue";
	import Input from "../shared/Input.tsx
	import { ref } from "vue";

	const email = ref("");

	const authStore = useAuthStore();

	const { showLoginModal } = storeToRefs(authStore);
	const { toggleLoginModal } = authStore;
</script>

<style scoped></style>
