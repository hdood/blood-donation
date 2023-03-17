<template>
	<nav
		class="mx-auto w-3/4 rounded-3xl flex items-center px-4 justify-between h-20"
	>
		<div>Logo</div>
		<div class="space-x-6">
			<RouterLink to="/">
				<button class="h-10 px-5 rounded-3xl text-white bg-rose-400">
					Donate Blood
				</button>
			</RouterLink>
			<button
				@click="toggleLoginModal"
				class="h-10 px-5 rounded-3xl text-white bg-rose-400"
			>
				login
			</button>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import useAuthStore from "@/stores/donor/auth";
	const authStore = useAuthStore();
	const { toggleLoginModal } = authStore;
</script>

<style scoped></style>
