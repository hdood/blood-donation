<template>
	<tr
		class="w-full h-10 dark:bg-gray-800"
		:class="[
			props.active
				? 'bg-indigo-200 dark:bg-indigo-600/70'
				: 'bg-white hover:bg-gray-100 cursor-pointer',
		]"
	>
		<td
			class="h-10 dark:text-white"
			v-for="(field, index) in props.fields"
			:class="index == 0 ? 'px-4' : ''"
		>
			{{ props.row[field] }}
		</td>
	</tr>
</template>

<script setup lang="ts">
	const props = defineProps<{
		row: object;
		fields: object;
		active: boolean;
	}>();
</script>

<style scoped></style>
