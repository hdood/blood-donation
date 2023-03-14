<template>
	<div
		@click="toggle"
		class="w-12 h-5 rounded-3xl flex items-center transition-all cursor-pointer relative"
		:class="[on && 'bg-indigo-600', !on && 'bg-gray-300']"
	>
		<div
			class="rounded-full absolute w-6 h-6 transition-all duration-200 grid place-items-center"
			:class="[
				on && 'translate-x-full',
				!on && 'bg-gray-600',
				on && 'bg-white',
			]"
		>
			<DarkModeIcon
				class="h-4 w-4"
				:class="[on && 'fill-indigo-600', !on && 'fill-white']"
			/>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import DarkModeIcon from "../../icons/DarkModeIcon.vue";

	const emits = defineEmits(["toggle"]);
	const on = ref(false);
	function toggle() {
		on.value = !on.value;

		
		emits("toggle");
	}
</script>

<style scoped></style>
