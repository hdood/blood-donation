<template>
	<div class="w-screen h-screen grid place-items-center">
		<div class="flex flex-col items-center gap-3">
			<div class="text-3xl">you've signed up with success</div>
			<div>
				You'll be able to access yor account when the admins accept you
			</div>
			<RouterLink to="/">
				<Button
					type="primary"
					class="px-2 h-10"
					>Home Page
				</Button>
			</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Button from "@/components/shared/Button.vue";
</script>

<style scoped></style>
