<template>
	<div class="bg-gray-50 p-1 rounded">
		<div class="text-sm">
			{{ props.question.text }}
		</div>
		<div>
			<span class="font-medium">
				Answer : {{ props.question.answer.data.answer ? "Yes" : "No" }}
				<span v-if="props.question.answer.data.ifYes"
					>, {{ props.question.answer.data.ifYes }}</span
				>
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		question: any;
	}>();
</script>

<style scoped></style>
