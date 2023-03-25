<template>
	<div class="space-x-5 w-full flex justify-end">
		<button v-if="props.currentStep.value != 0" @click="props.previousStep">
			Previous
		</button>
		<button
			class="p-1 w-20 text-white rounded-lg"
			:class="[
				!props.valid.value && 'cursor-not-allowed bg-gray-200 ',
				props.valid.value && 'hover:bg-rose-300 bg-red-700',
			]"
			@click="props.nextStep"
		>
			{{ props.currentStep.value == props.length ? "Finish" : "Next" }}
		</button>
	</div>
</template>

<script setup lang="ts">
	import type { Ref, ComputedRef } from "vue";
	import { toRefs } from "vue";

	const props = defineProps<{
		nextStep: Function;
		previousStep: Function;
		currentStep: Ref<number>;
		length: number;
		valid: ComputedRef<boolean>;
	}>();

	const { currentStep } = toRefs(props);
	// const props = defineProps([
	// 	"nextStep",
	// 	"previousStep",
	// 	"currentStep",
	// 	"length",
	// 	"valid",
	// ]);

	console.log(currentStep.value);
</script>

<style scoped></style>
