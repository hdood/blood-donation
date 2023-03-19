<template>
	<div class="space-x-5 w-96 flex justify-end">
		<button v-if="props.currentStep.value != 0" @click="props.previousStep">
			Previous
		</button>
		<button
			class="p-1 w-20 hover:bg-rose-300 bg-rose-400 text-white rounded-lg"
			@click="props.nextStep"
		>
			{{ props.currentStep.value == props.length ? "Finish" : "Next" }}
		</button>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps([
		"nextStep",
		"previousStep",
		"currentStep",
		"length",
		"valid",
	]);
	console.log(props.currentStep.value);
</script>

<style scoped></style>
