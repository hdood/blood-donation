<template>
	<div class="flex h-screen fixed w-screen dark:bg-slate-800">
		<div class="h-full w-1/12 transition-all">
			<SideNavigation></SideNavigation>
		</div>
		<div
			class="main flex-grow h-full flex flex-col items-center rounded-tl-3xl bg-primary dark:bg-slate-700 overflow-y-scroll"
		>
			<div class="w-11/12 mt-6 h-16">
				<NavigationBar></NavigationBar>
			</div>
			<div class="flex justify-center w-11/12 mt-4">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import SideNavigation from "../SideNavigation.vue";
	import NavigationBar from "../NavigationBar.vue";
</script>

<style scoped>
	.main {
		border-radius: 50px 0 0 50px;
	}
	.main::-ms-track {
		background-color: red;
	}
	.main::-webkit-scrollbar-thumb {
		background-color: red;
	}
	.main::-webkit-scrollbar-track {
		background-color: red;
	}
</style>
