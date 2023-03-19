<script setup lang="ts">
	import { RouterView } from "vue-router";
	enum rhFactor {
		POSITIVE,
		NEGATIVE,
	}

	function rhDonation(donor: number, receiver: number): boolean {
		return !!(donor ** receiver);
	}
</script>

<template>
	<RouterView />
</template>

<style>
	* {
		transition: background-color 300ms ease;
	}
	svg {
		transition: fill 300ms ease, stroke 300ms ease;
	}
</style>
