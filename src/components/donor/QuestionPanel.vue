<template>
	<div class="flex flex-col gap-4 p-2">
		<span
			v-if="error"
			class="text-lg italic text-red-700 dark:text-rose-300"
			>please answer all the questions</span
		>
		<div v-for="question in questions">
			<component
				:is="parseComponentName(question.type)"
				:question="question"
				@answer="handleAnswer"
			/>
		</div>
		<div class="mt-6 w-[55rem] flex justify-end space-x-5">
			<Button
				type="primary"
				class="px-2 h-10 text-center"
				@click="submit"
			>
				Book Appointment
			</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { storeToRefs } from "pinia";
	import useAppointmentsStore from "@/stores/donor/appointments";
	import { onMounted, defineAsyncComponent, ref } from "vue";
	import Button from "../shared/Button.vue";

	const { fetchQuestions, toggleBookModal } = useAppointmentsStore();
	const { questions, answers } = storeToRefs(useAppointmentsStore());
	const tempAnswers: any = ref({});
	const error: any = ref(false);

	const emits = defineEmits(["close"]);

	function parseComponentName(name: string) {
		try {
			const component = defineAsyncComponent(
				() => import(`@/components/donor/questions/${name}.vue`)
			);
			return component;
		} catch (error) {
			return {
				template: `could not resolve ${name}.vue are you sure this component exists`,
			};
		}
	}

	onMounted(async () => {
		if (Object.keys(questions.value).length == 0) await fetchQuestions();
	});

	async function submit() {
		console.log(Object.keys(questions.value).length);
		console.log(Object.keys(answers.value).length);

		if (
			Object.keys(questions.value).length !=
			Object.keys(answers.value).length
		) {
			error.value = "complete all the answers please";
			return;
		}
		emits("close");
		toggleBookModal();
	}

	function handleAnswer(answer: any) {
		tempAnswers.value[answer.id] = answer;
		answers.value = Object.values(tempAnswers.value);
	}
</script>

<style scoped></style>
