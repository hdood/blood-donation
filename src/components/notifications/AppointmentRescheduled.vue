<template>
	<div
		class="bg-gradient-to-l from-orange-400 to-orange-500 rounded-lg py-4 px-3 flex items-center gap-4 relative"
	>
		<div
			class="bg-white text-orange-400 h-10 w-10 grid rounded-lg place-items-center"
		>
			<ExclamationCircleIcon class="w-6 h-6" />
		</div>
		<div class="text-white">
			<div class="font-medium">Appointment Rescheduled</div>
			<div class="text-sm">
				New date : {{ props.notification.data.date }} at
				{{ props.notification.data.time }}
			</div>
		</div>
		<div
			class="absolute right-4 top-6.5 cursor-pointer flex items-center justify-center text-white"
			@click="
				$emit('delete', { id: props.notification.id, guard: 'donor' })
			"
		>
			<XMarkIcon class="w-6 h-6" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { CheckIcon } from "@heroicons/vue/24/outline";
	import { XMarkIcon } from "@heroicons/vue/24/outline";
	import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";

	const props = defineProps<{
		notification: any;
	}>();
</script>

<style scoped></style>
