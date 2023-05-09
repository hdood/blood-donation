<template>
	<table
		class="h-fit rounded-xl overflow-hidden p-1 space-y-5 text-sm text-left text-gray-500 dark:text-gray-400"
	>
		<thead
			class="text-xs text-black uppercase bg-gray-50 dark:bg-slate-500 dark:text-white"
		>
			<tr
				class="px-4 text-white dark:bg-indigo-900/50"
				:class="[
					headerClass
						? headerClass
						: 'bg-gradient-to-r from-blue-400 to-blue-500',
				]"
			>
				<th
					scope="col"
					class="py-3"
					v-for="(field, index) in props.fields"
					:class="index == 0 ? 'px-4' : ''"
				>
					{{ field }}
				</th>
			</tr>
		</thead>
		<tbody>
			<slot
				v-for="row in data"
				:row="row"
				:fields="props.fields"
			/>
		</tbody>
	</table>
</template>

<script setup lang="ts">
	const props = defineProps<{
		data: any;
		fields: object;
		headerClass?: string;
	}>();
</script>

<style scoped></style>
