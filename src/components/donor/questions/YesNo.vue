<template>
	<div
		class="flex flex-col gap-1 bg-neutral-50 p-2 rounded-lg dark:bg-slate-500 dark:text-slate-200"
	>
		<span>
			{{ question.text }}
		</span>
		<YesNoInput v-model="answer" />
	</div>
</template>

<script setup lang="ts">
	import YesNoInput from "../YesNoInput.vue";
	import { ref, watch } from "vue";

	const answer = ref();

	const emits = defineEmits(["answer"]);
	const props = defineProps<{
		question: any;
	}>();

	watch(answer, (answer: any) =>
		emits("answer", { data: { value: answer }, id: props.question.id })
	);
</script>

<style scoped></style>
