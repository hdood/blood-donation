<template>
	<tr
		class="w-full dark:bg-gray-800"
		:class="[
			props.active
				? activeColors
					? activeColors
					: 'bg-indigo-300 dark:bg-indigo-700/70 text-gray-900'
				: 'bg-white hover:bg-gray-100 hover:dark:bg-indigo-900/50  cursor-pointer',
		]"
	>
		<td
			class="h-10 dark:text-white"
			v-for="(field, index) in props.fields"
			:class="index == 0 ? 'px-4' : ''"
		>
			{{ props?.row?.[field] }}
		</td>
		<slot />
	</tr>
</template>

<script setup lang="ts">
	const props = defineProps<{
		row: object;
		fields: object;
		activeColors?: string;
		active?: boolean;
	}>();
</script>

<style scoped></style>
