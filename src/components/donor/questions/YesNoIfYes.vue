<template>
	<div
		class="flex flex-col gap-4 bg-neutral-50 p-2 rounded-lg dark:bg-slate-500 dark:text-slate-200"
	>
		<div class="flex flex-col gap-1">
			<span>
				{{ question.text }}
			</span>
			<YesNoInput v-model="answer" />
		</div>
		<div class="flex flex-col gap-1">
			<span>if Yes, {{ question.data.ifYes }} </span>
			<Input v-model="ifYes" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import YesNoInput from "../YesNoInput.vue";

	import Input from "@/components/shared/Input";
	import { ref, watch } from "vue";

	const ifYes = ref("");
	const answer = ref();

	const emits = defineEmits(["answer"]);
	const props = defineProps<{
		question: any;
	}>();

	watch(answer, (answer: any) =>
		emits("answer", {
			data: { answer, ifYes: ifYes.value },
			id: props.question.id,
		})
	);
	watch(ifYes, (ifYes) =>
		emits("answer", {
			data: { answer: answer.value, ifYes },
			id: props.question.id,
		})
	);
</script>

<style scoped></style>
