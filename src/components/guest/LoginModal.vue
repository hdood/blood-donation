<template>
	<Modal
		:show="showLoginModal"
		@close="toggleLoginModal"
	>
		<template #head>
			<div>
				<form name="login-form">
					<Input
						name="email"
						type="email"
						v-model="email"
						:validation="() => (email ? true : false)"
					/>
				</form>
			</div>
		</template>
		<template #body></template>
	</Modal>
</template>

<script setup lang="ts">
	import useAuthStore from "@/stores/donors/auth";
	import { storeToRefs } from "pinia";
	import Modal from "../shared/Modal.vue";
	import Input from "../shared/Input";
	import { ref } from "vue";

	const email = ref("");

	const authStore = useAuthStore();

	const { showLoginModal } = storeToRefs(authStore);
	const { toggleLoginModal } = authStore;
</script>

<style scoped></style>
