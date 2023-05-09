<template>
	<div
		class="bg-gradient-to-l from-red-400 to-red-500 rounded-lg py-4 px-3 flex items-center gap-4 relative"
	>
		<div
			class="bg-white text-red-400 h-10 w-10 grid rounded-lg place-items-center"
		>
			<ExclamationCircleIcon class="w-6 h-6" />
		</div>
		<div class="text-white">
			<div class="font-medium">Appointment Cancelled</div>
			<div class="text-sm">
				{{ props.notification.data.user.name }}
				Cancelled his appointment
			</div>
		</div>
		<div
			class="absolute right-4 top-6.5 cursor-pointer flex items-center justify-center text-white"
			@click="
				$emit('delete', { id: props.notification.id, guard: 'admin' })
			"
		>
			<XMarkIcon class="w-6 h-6" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { XMarkIcon } from "@heroicons/vue/24/outline";
	import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";

	const props = defineProps<{
		notification: any;
	}>();
</script>

<style scoped></style>
