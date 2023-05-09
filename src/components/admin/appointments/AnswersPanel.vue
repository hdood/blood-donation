vba
<template>
	<div class="flex flex-col gap-4 p-2 w-[30rem]">
		<div v-for="question in answeredQuestions">
			<component
				:is="parseComponentName(question.type)"
				:question="question"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { storeToRefs } from "pinia";
	import useAppointmentsStore from "@/stores/admin/appointments";
	import { defineAsyncComponent } from "vue";

	const { answeredQuestions } = storeToRefs(useAppointmentsStore());

	function parseComponentName(name: string) {
		try {
			const component = defineAsyncComponent(
				() =>
					import(
						`@/components/admin/appointments/answers/${name}Answer.vue`
					)
			);
			return component;
		} catch (error) {
			return {
				template: `could not resolve ${name}Answer.vue are you sure this component exists`,
			};
		}
	}
</script>

<style scoped></style>
