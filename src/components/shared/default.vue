<template>
	<div class="flex h-screen fixed w-screen dark:bg-slate-800">
		<div
			class="h-full w-20 hover:w-[12rem] [&:hover_.item]:inline [&:hover_.item-wrapper]:w-36 [&:hover_.item-wrapper]:transition-all duration-300 transition-all"
			v-if="!props.noSideBar"
		>
			<SideNavigation>
				<slot name="side-navigation" />
			</SideNavigation>
		</div>
		<div
			class="main flex-grow h-full flex flex-col items-center rounded-tl-3xl bg-primary dark:bg-slate-700 overflow-y-scroll overflow-x-hidden"
		>
			<div class="w-11/12 mt-6 h-16">
				<NavigationBar :store="props.store"></NavigationBar>
			</div>
			<div class="w-full h-full">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import SideNavigation from "./SideNavigation.vue";
	import NavigationBar from "../admin/NavigationBar.vue";

	const props = defineProps<{
		store: any;
		noSideBar?: boolean;
	}>();
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
