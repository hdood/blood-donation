<template>
	<div
		class="bg-gradient-to-l from-blue-400 to-blue-500 rounded-lg py-4 px-3 flex items-center gap-4 relative"
	>
		<div
			class="bg-white text-blue-400 h-10 w-10 grid rounded-lg place-items-center"
		>
			<BellIcon class="w-6 h-6" />
		</div>
		<div class="text-white">
			<div class="font-medium">Duty Call</div>
			<div class="text-sm">
				{{ props.notification.data.patient.name }} is requesting
				{{
					Donor.parseBloodGroup(
						props.notification.data.request.bloodGroup,
						props.notification.data.request.rhFactor
					)
				}}
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
	import { BellIcon } from "@heroicons/vue/24/solid";
	import { XMarkIcon } from "@heroicons/vue/24/solid";
	import Donor from "@/models/Donor";

	const props = defineProps<{
		notification: any;
	}>();
</script>

<style scoped></style>
