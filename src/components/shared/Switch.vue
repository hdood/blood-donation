<template>
	<div
		@click="toggle"
		class="w-12 h-5 rounded-3xl flex items-center transition-all cursor-pointer"
		:class="[props.on && 'bg-indigo-500', !props.on && 'bg-gray-300']"
	>
		<div
			class="rounded-full absolute w-6 h-6 transition-all duration-200 grid place-items-center"
			:class="[
				props.on && 'translate-x-full',
				!props.on && 'bg-indigo-600',
				props.on && 'bg-white',
			]"
		>
			<DarkModeIcon
				class="h-4 w-4"
				:class="[
					props.on && 'fill-indigo-600',
					!props.on && 'fill-white',
				]"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import DarkModeIcon from "../../icons/DarkModeIcon.vue";

	const props = defineProps<{
		on: boolean;
	}>();

	const emits = defineEmits(["toggle"]);
	function toggle() {
		emits("toggle");
	}
</script>

<style scoped></style>
