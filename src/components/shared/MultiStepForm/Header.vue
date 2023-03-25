<template>
	<div class="relative flex items-center">
		<ul class="flex w-full h-full items-center justify-evenly px-3 border">
			<li
				v-for="info in props.infos"
				:class="[info.key == props.currentStepId && 'text-rose-400']"
				class="flex text-sm items-center space-x-2 border"
				:key="info.title"
			>
				<div
					class="h-4 w-4 rounded-full"
					:class="[
						info.key == props.currentStepId && 'bg-rose-400',
						info.key != props.currentStepId &&
							'border border-rose-400',
					]"
				></div>
				<span>{{ info.title }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	interface Info {
		title: string;
		key: number;
	}

	const props = defineProps<{
		infos: Array<Info>;
		currentStepId: number;
		length: number;
	}>();
</script>

<style scoped></style>
