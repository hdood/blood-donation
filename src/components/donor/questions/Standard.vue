<template>
	<div
		class="flex flex-col gap-4 bg-neutral-50 p-2 rounded-lg dark:bg-slate-500 dark:text-slate-200"
	>
		<div class="flex flex-col gap-1">
			<span>
				{{ question.text }}
				<Input v-model="answer" />
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Input from "@/components/shared/Input";
	import { ref, watch } from "vue";

	const answer = ref("");

	const emits = defineEmits(["answer"]);
	const props = defineProps<{
		question: any;
	}>();

	watch(answer, (answer: any) =>
		emits("answer", {
			data: { answer },
			id: props.question.id,
		})
	);
</script>

<style scoped></style>
