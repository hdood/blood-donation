<template>
	<transition
		enter-active-class="transition-all absolute duration-300"
		leave-active-class="transition-all absolute duration-100"
		enter-from-class="opacity-0 translate-x-4"
		leave-to-class="opacity-0 -translate-x-4"
	>
		<slot class="" />
	</transition>
</template>

<script setup lang="ts"></script>

<style scoped></style>
