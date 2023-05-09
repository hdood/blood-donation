<template>
	<div class="bg-gray-50 p-1 rounded">
		<div>
			{{ props.question.text }}
		</div>
		<div>
			<span class="font-medium"
				>Answer : {{ props.question.answer.data.answer }}</span
			>
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		question: any;
	}>();
</script>

<style scoped></style>
